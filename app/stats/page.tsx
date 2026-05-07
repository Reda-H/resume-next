import type { Metadata } from 'next';
import { redis } from '@/lib/redis';

export const metadata: Metadata = {
  title: 'Stats',
  description:
    'Live breakdown of who visits this site — people, AI models, and bots.',
  alternates: { canonical: '/stats' },
  openGraph: {
    title: 'Stats — Reda Herradi',
    description:
      'Live breakdown of who visits this site — people, AI models, and bots.',
    url: '/stats',
  },
};

export const revalidate = 60;

type Bucket = 'human' | 'ai' | 'bot';

async function readStats(): Promise<{
  totals: Record<Bucket, number>;
  ua: Record<'ai' | 'bot', Record<string, number>>;
} | null> {
  if (!redis) return null;

  const [human, ai, bot, aiUa, botUa] = await Promise.all([
    redis.get<number>('total:human'),
    redis.get<number>('total:ai'),
    redis.get<number>('total:bot'),
    redis.hgetall<Record<string, number>>('ua:ai'),
    redis.hgetall<Record<string, number>>('ua:bot'),
  ]);

  return {
    totals: {
      human: human ?? 0,
      ai: ai ?? 0,
      bot: bot ?? 0,
    },
    ua: {
      ai: aiUa ?? {},
      bot: botUa ?? {},
    },
  };
}

function Bar({ value, max }: { value: number; max: number }) {
  const pct = max > 0 ? Math.max(2, Math.round((value / max) * 100)) : 0;
  return (
    <span
      aria-hidden
      className="inline-block h-1.5 align-middle bg-primary/70"
      style={{ width: `${pct}%` }}
    />
  );
}

function Row({
  label,
  value,
  max,
}: {
  label: string;
  value: number;
  max: number;
}) {
  return (
    <div className="grid grid-cols-[10rem_1fr_3.5rem] items-center gap-3 mt-1.5 tabular-nums">
      <span className="truncate text-foreground">{label}</span>
      <span className="block">
        <Bar value={value} max={max} />
      </span>
      <span className="text-right text-foreground/70">
        {value.toLocaleString()}
      </span>
    </div>
  );
}

export default async function Stats() {
  const stats = await readStats();

  if (!stats) {
    return (
      <>
        <h1 className="font-semibold mb-7 text-foreground">Stats</h1>
        <p className="mt-7">
          Stats aren&apos;t wired up yet — once Upstash Redis is provisioned on
          Vercel, this page will start showing the live breakdown of people,
          AI models, and bots hitting the site.
        </p>
      </>
    );
  }

  const { totals, ua } = stats;
  const grandTotal = totals.human + totals.ai + totals.bot;
  const totalsMax = Math.max(totals.human, totals.ai, totals.bot, 1);

  const aiEntries = Object.entries(ua.ai).sort((a, b) => b[1] - a[1]);
  const botEntries = Object.entries(ua.bot).sort((a, b) => b[1] - a[1]);
  const aiMax = aiEntries[0]?.[1] ?? 1;
  const botMax = botEntries[0]?.[1] ?? 1;

  return (
    <>
      <h1 className="font-semibold mb-7 text-foreground">Stats</h1>
      <p className="mt-7">
        Live breakdown of {grandTotal.toLocaleString()} visits to this site,
        bucketed by user agent. People come through real browsers, models are
        AI crawlers (GPTBot, ClaudeBot, Perplexity, and the rest), and bots is
        everything else — search engines, link previews, scrapers. Updated
        every minute.
      </p>

      <h2 className="font-semibold mt-12 mb-3 text-foreground">Totals</h2>
      <div>
        <Row label="people" value={totals.human} max={totalsMax} />
        <Row label="models" value={totals.ai} max={totalsMax} />
        <Row label="bots" value={totals.bot} max={totalsMax} />
      </div>

      <h2 className="font-semibold mt-12 mb-3 text-foreground">Models</h2>
      {aiEntries.length === 0 ? (
        <p className="mt-4 text-foreground/70">No AI crawlers seen yet.</p>
      ) : (
        <div>
          {aiEntries.map(([name, count]) => (
            <Row key={name} label={name} value={count} max={aiMax} />
          ))}
        </div>
      )}

      <h2 className="font-semibold mt-12 mb-3 text-foreground">Bots</h2>
      {botEntries.length === 0 ? (
        <p className="mt-4 text-foreground/70">No other bots seen yet.</p>
      ) : (
        <div>
          {botEntries.map(([name, count]) => (
            <Row key={name} label={name} value={count} max={botMax} />
          ))}
        </div>
      )}

      <p className="mt-12 text-foreground/60 text-xs">
        Bucketing is best-effort — bots that spoof browser user-agents will be
        counted as people. No cookies, no IPs, no fingerprinting.
      </p>
    </>
  );
}
