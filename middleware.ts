import { NextRequest, NextResponse, NextFetchEvent } from 'next/server';
import { classify } from '@/lib/ua-classify';
import { redis } from '@/lib/redis';

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  if (!redis) return NextResponse.next();

  const ua = req.headers.get('user-agent') || '';
  const { bucket, name } = classify(ua);

  const ops = redis.pipeline();
  ops.incr(`total:${bucket}`);
  if (bucket !== 'human' && name) {
    ops.hincrby(`ua:${bucket}`, name, 1);
  }
  event.waitUntil(ops.exec().catch(() => {}));

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/|api/|stats|favicon|robots\\.txt|sitemap\\.xml|llms\\.txt|opengraph-image|.*\\..*).*)',
  ],
};
