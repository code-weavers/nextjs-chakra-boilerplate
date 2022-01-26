import Cookies from 'js-cookie';

export enum CookiesEnum {
  AuthorizationToken = 'token',
}

class CookiesHandler {
  token = '';

  findCookie(cookies: string, cookieName: string): string {
    return (
      cookies
        ?.split(';')
        ?.find((item) => item.includes(cookieName))
        ?.split('=')[1] || ''
    );
  }

  setCookie(name: CookiesEnum, value: string) {
    Cookies.set(name, value);
    this[name] = value;
  }

  getCookie(name: CookiesEnum) {
    return Cookies.get(name) || this[name] || '';
  }
}
export default new CookiesHandler();
