import { BaseClient } from "./BaseClient";

export type Joke = {
  setup: string;
  delivery: string;
};

export class JokeClient extends BaseClient {
  protected apiHost: string = "https://v2.jokeapi.dev/joke/christmas";

  public async get(): Promise<Joke> {
    return (await this.fetch()) as Joke;
  }
}
