import { Container } from "@cloudflare/containers";

export class SearxNGContainer extends Container {
  defaultPort = 8080;
  // keep the container alive for 10 minutes after the last request
  sleepAfter = "10m";
}

export default {
  async fetch(request, env) {
    const id = env.SEARXNG_CONTAINER.idFromName("default");
    const container = env.SEARXNG_CONTAINER.get(id);
    await container.startAndWaitForPorts([8080]);
    return await container.fetch(request);
  },
};
