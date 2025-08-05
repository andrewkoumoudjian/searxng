import { Container } from "@cloudflare/containers";

export class SearxNGContainer extends Container {
  defaultPort = 8080;
}

export default {
  async fetch(request, env) {
    const id = env.SEARXNG_CONTAINER.idFromName("default");
    const container = env.SEARXNG_CONTAINER.get(id);
    return container.fetch(request);
  },
};
