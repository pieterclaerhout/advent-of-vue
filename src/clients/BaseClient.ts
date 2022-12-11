type Params = { [key: string]: string };

interface HeadersFunc {
  (headers: Headers): void;
}

export class BaseClient {
  protected apiHost: string = "";
  public headers?: HeadersFunc;

  protected async fetch(
    url: string = "",
    params: Params = {},
    method: string = "GET"
  ): Promise<any> {
    const qs = new URLSearchParams(params);

    const headers: Headers = new Headers();
    if (this.headers) {
      await this.headers(headers);
    }

    const resp = await fetch(`${this.apiHost}${url}?${qs}`, {
      method: method,
      headers: headers,
    });

    const result = await resp.json();
    if (!resp.ok) {
      throw new Error(result);
    }
    return result;
  }
}
