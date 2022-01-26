import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import CookiesHandler, { CookiesEnum } from '../utils/CookiesHandler';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log(req.page);

  return NextResponse.next();
  const token = req.cookies[CookiesEnum.AuthorizationToken];

  // return { redirected: '/' };
  return new Response('Hello, world!');
}
