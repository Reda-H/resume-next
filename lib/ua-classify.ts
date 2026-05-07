export type Bucket = 'human' | 'ai' | 'bot';

interface BotMatcher {
  pattern: RegExp;
  name: string;
  bucket: 'ai' | 'bot';
}

const MATCHERS: BotMatcher[] = [
  { pattern: /GPTBot/i, name: 'GPTBot', bucket: 'ai' },
  { pattern: /ChatGPT-User/i, name: 'ChatGPT-User', bucket: 'ai' },
  { pattern: /OAI-SearchBot/i, name: 'OAI-SearchBot', bucket: 'ai' },
  { pattern: /ClaudeBot/i, name: 'ClaudeBot', bucket: 'ai' },
  { pattern: /Claude-Web/i, name: 'Claude-Web', bucket: 'ai' },
  { pattern: /Claude-User/i, name: 'Claude-User', bucket: 'ai' },
  { pattern: /Claude-SearchBot/i, name: 'Claude-SearchBot', bucket: 'ai' },
  { pattern: /anthropic-ai/i, name: 'anthropic-ai', bucket: 'ai' },
  { pattern: /PerplexityBot/i, name: 'PerplexityBot', bucket: 'ai' },
  { pattern: /Perplexity-User/i, name: 'Perplexity-User', bucket: 'ai' },
  { pattern: /Google-Extended/i, name: 'Google-Extended', bucket: 'ai' },
  { pattern: /GoogleOther/i, name: 'GoogleOther', bucket: 'ai' },
  { pattern: /Applebot-Extended/i, name: 'Applebot-Extended', bucket: 'ai' },
  { pattern: /Bytespider/i, name: 'Bytespider', bucket: 'ai' },
  { pattern: /CCBot/i, name: 'CCBot', bucket: 'ai' },
  { pattern: /meta-externalagent/i, name: 'meta-externalagent', bucket: 'ai' },
  { pattern: /meta-externalfetcher/i, name: 'meta-externalfetcher', bucket: 'ai' },
  { pattern: /FacebookBot/i, name: 'FacebookBot', bucket: 'ai' },
  { pattern: /Amazonbot/i, name: 'Amazonbot', bucket: 'ai' },
  { pattern: /cohere-ai/i, name: 'cohere-ai', bucket: 'ai' },
  { pattern: /cohere-training-data-crawler/i, name: 'cohere-training', bucket: 'ai' },
  { pattern: /MistralAI-User/i, name: 'MistralAI-User', bucket: 'ai' },
  { pattern: /YouBot/i, name: 'YouBot', bucket: 'ai' },
  { pattern: /DuckAssistBot/i, name: 'DuckAssistBot', bucket: 'ai' },
  { pattern: /Diffbot/i, name: 'Diffbot', bucket: 'ai' },
  { pattern: /omgili/i, name: 'omgili', bucket: 'ai' },
  { pattern: /Kagibot/i, name: 'Kagibot', bucket: 'ai' },
  { pattern: /AwarioBot/i, name: 'AwarioBot', bucket: 'ai' },
  { pattern: /Timpibot/i, name: 'Timpibot', bucket: 'ai' },
  { pattern: /ImagesiftBot/i, name: 'ImagesiftBot', bucket: 'ai' },
  { pattern: /PetalBot/i, name: 'PetalBot', bucket: 'ai' },

  { pattern: /Googlebot/i, name: 'Googlebot', bucket: 'bot' },
  { pattern: /Bingbot/i, name: 'Bingbot', bucket: 'bot' },
  { pattern: /DuckDuckBot/i, name: 'DuckDuckBot', bucket: 'bot' },
  { pattern: /YandexBot/i, name: 'YandexBot', bucket: 'bot' },
  { pattern: /Baiduspider/i, name: 'Baiduspider', bucket: 'bot' },
  { pattern: /Yahoo!?\s?Slurp/i, name: 'YahooSlurp', bucket: 'bot' },
  { pattern: /Applebot(?!-Extended)/i, name: 'Applebot', bucket: 'bot' },
  { pattern: /Sogou/i, name: 'Sogou', bucket: 'bot' },
  { pattern: /Exabot/i, name: 'Exabot', bucket: 'bot' },
  { pattern: /facebookexternalhit/i, name: 'facebookexternalhit', bucket: 'bot' },
  { pattern: /Twitterbot/i, name: 'Twitterbot', bucket: 'bot' },
  { pattern: /LinkedInBot/i, name: 'LinkedInBot', bucket: 'bot' },
  { pattern: /Slackbot/i, name: 'Slackbot', bucket: 'bot' },
  { pattern: /Discordbot/i, name: 'Discordbot', bucket: 'bot' },
  { pattern: /WhatsApp/i, name: 'WhatsApp', bucket: 'bot' },
  { pattern: /TelegramBot/i, name: 'TelegramBot', bucket: 'bot' },
  { pattern: /AhrefsBot/i, name: 'AhrefsBot', bucket: 'bot' },
  { pattern: /SemrushBot/i, name: 'SemrushBot', bucket: 'bot' },
  { pattern: /MJ12bot/i, name: 'MJ12bot', bucket: 'bot' },
  { pattern: /DotBot/i, name: 'DotBot', bucket: 'bot' },
  { pattern: /UptimeRobot/i, name: 'UptimeRobot', bucket: 'bot' },
  { pattern: /vercel-screenshot/i, name: 'vercel-screenshot', bucket: 'bot' },
  { pattern: /vercel-favicon/i, name: 'vercel-favicon', bucket: 'bot' },
];

const GENERIC_BOT = /bot|crawler|spider|http-?client|curl|wget|python-requests|axios|go-http-client|java\/|libwww|scrapy|headlesschrome|node-fetch/i;

export function classify(ua: string): { bucket: Bucket; name: string | null } {
  if (!ua) return { bucket: 'bot', name: 'no-ua' };

  for (const m of MATCHERS) {
    if (m.pattern.test(ua)) return { bucket: m.bucket, name: m.name };
  }

  if (GENERIC_BOT.test(ua)) return { bucket: 'bot', name: 'unknown-bot' };

  return { bucket: 'human', name: null };
}
