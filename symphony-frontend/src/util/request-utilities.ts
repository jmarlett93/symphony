export enum AjaxVerbs {
  POST = 'POST',
  GET = 'GET',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

export interface RequestOptions {
  method: AjaxVerbs;
  headers: Headers;
  body: BodyInit;
}
