interface HeadersFunc {
  (headers: Headers): void;
}

export class Client {
  public basepath: String = "/oto/";
  public headers?: HeadersFunc;
}

export class GreeterService {
  constructor(readonly client: Client) {}

  async greet(
    greetRequest?: GreetRequest,
    modifyHeaders?: HeadersFunc
  ): Promise<GreetResponse> {
    if (greetRequest == null) {
      greetRequest = new GreetRequest();
    }
    const headers: Headers = new Headers();
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json");
    if (this.client.headers) {
      await this.client.headers(headers);
    }
    if (modifyHeaders) {
      await modifyHeaders(headers);
    }
    const response = await fetch(
      this.client.basepath + "GreeterService.Greet",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(greetRequest),
      }
    );
    if (response.status !== 200) {
      throw new Error(
        `GreeterService.Greet: ${response.status} ${response.statusText}`
      );
    }
    return response.json().then((json) => {
      if (json.error) {
        throw new Error(json.error);
      }
      return new GreetResponse(json);
    });
  }
}

export class GreetRequest {
  constructor(data?: any) {
    if (data) {
      this.name = data.name;
    }
  }

  name: string = stringDefault;
}

export class GreetResponse {
  constructor(data?: any) {
    if (data) {
      this.greeting = data.greeting;
      this.error = data.error;
    }
  }

  greeting: string = stringDefault;
  error: string = stringDefault;
}

const stringDefault = "";
const numberDefault = 0;
const booleanDefault = false;
const anyDefault = null;
