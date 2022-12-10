export class BaseClient {
  protected apiHost: string = "";

  protected async fetch(
    url: string = "",
    params: { [key: string]: string } = {}
  ): Promise<any> {
    const qs = new URLSearchParams();
    for (const key in params) {
      qs.set(key, params[key]);
    }
    if (qs.entries.length > 0) {
      url += `?${qs}`;
    }

    const resp = await fetch(`${this.apiHost}${url}`);
    const result = await resp.json();
    if (!resp.ok) {
      throw new Error(result);
    }
    return result;
  }
}
