# Cloudflare Container Deployment

This directory contains the configuration needed to deploy [SearXNG](https://github.com/searxng/searxng) on Cloudflare's container platform.

## Deployment

To deploy the container:

```bash
npx wrangler deploy
```

Wrangler builds the local Dockerfile, pushes the resulting image to Cloudflare's registry, and deploys the container automatically. No manual Docker build or push is required.
