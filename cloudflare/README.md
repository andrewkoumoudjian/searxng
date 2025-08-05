# Cloudflare Container Deployment

This directory contains the configuration needed to deploy [SearXNG](https://github.com/searxng/searxng) on Cloudflare's container platform.

## Deployment

To deploy the container:

```bash
npx wrangler deploy
```

Wrangler pulls the official `ghcr.io/searxng/searxng` image and deploys it directly to Cloudflare. No local Docker build or push is required.
