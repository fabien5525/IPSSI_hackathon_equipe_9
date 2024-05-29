# NodeJS 20
FROM node:18.20-bookworm-slim

COPY ./entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

WORKDIR /app

ENTRYPOINT ["/bin/bash", "/entrypoint.sh"]

EXPOSE 3000