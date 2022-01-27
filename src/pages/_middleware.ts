import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import CookiesHandler, { CookiesEnum } from '../utils/CookiesHandler';
import { RoutesEnum } from '../constants/routes';

const protectedRoutes = [RoutesEnum.Protected];

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (protectedRoutes.includes(req.page.name as RoutesEnum)) {
    return req.cookies[CookiesEnum.AuthorizationToken] ? NextResponse.next() : {};
  }
}
