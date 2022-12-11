export class BaseClient {
  protected apiHost: string = "";

  protected async fetch(
    url: string = "",
    params: { [key: string]: string } = {}
  ): Promise<any> {
    const qs = new URLSearchParams();
    for (const key in params) {
      qs.append(key, params[key]);
    }

    const resp = await fetch(`${this.apiHost}${url}?${qs}`);
    const result = await resp.json();
    if (!resp.ok) {
      throw new Error(result);
    }
    return result;
  }
}
