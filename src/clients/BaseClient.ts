type Params = { [key: string]: string };

export class BaseClient {
  protected apiHost: string = "";

  protected async fetch(url: string = "", params: Params = {}): Promise<any> {
    const qs = new URLSearchParams(params);

    const resp = await fetch(`${this.apiHost}${url}?${qs}`);
    const result = await resp.json();
    if (!resp.ok) {
      throw new Error(result);
    }
    return result;
  }
}
