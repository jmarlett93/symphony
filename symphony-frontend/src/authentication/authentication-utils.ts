export enum AuthTokenEnum {
  SYMPHONY_TOKEN = 'symphony-token'
}
export function setAuthToken(tokenValue: string) {
  sessionStorage.setItem(AuthTokenEnum.SYMPHONY_TOKEN, tokenValue);
}

export function getAuthToken() {
  return sessionStorage.getItem(AuthTokenEnum.SYMPHONY_TOKEN);
}

export function isAuthenticated(): boolean {
  return !!getAuthToken();
}
