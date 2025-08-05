FROM docker.io/searxng/searxng:latest

# Optionally copy a custom settings.yml if present
# Only settings.yml is sent in build context via .dockerignore
COPY . /tmp/context
RUN if [ -f /tmp/context/settings.yml ]; then \
        mv /tmp/context/settings.yml /etc/searxng/settings.yml && \
        chown searxng:searxng /etc/searxng/settings.yml; \
    fi && rm -rf /tmp/context
