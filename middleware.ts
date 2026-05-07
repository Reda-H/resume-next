import { NextRequest, NextResponse, NextFetchEvent } from 'next/server';
import { classify } from '@/lib/ua-classify';
import { redis } from '@/lib/redis';

const VID_COOKIE = 'vid';
const VID_MAX_AGE = 60 * 60 * 24 * 30;

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  if (!redis) return NextResponse.next();

  const ua = req.headers.get('user-agent') || '';
  const { bucket, name } = classify(ua);
  const res = NextResponse.next();

  const isHuman = bucket === 'human';
  const hasVid = isHuman && req.cookies.has(VID_COOKIE);

  if (isHuman && !hasVid) {
    res.cookies.set({
      name: VID_COOKIE,
      value: crypto.randomUUID(),
      path: '/',
      maxAge: VID_MAX_AGE,
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
    });
  }

  if (!isHuman || !hasVid) {
    const ops = redis.pipeline();
    ops.incr(`total:${bucket}`);
    if (!isHuman && name) {
      ops.hincrby(`ua:${bucket}`, name, 1);
    }
    event.waitUntil(ops.exec().catch(() => {}));
  }

  return res;
}

export const config = {
  matcher: [
    '/((?!_next/|api/|stats|favicon|robots\\.txt|sitemap\\.xml|llms\\.txt|opengraph-image|.*\\..*).*)',
  ],
};
