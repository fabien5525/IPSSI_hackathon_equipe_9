FROM python:3.9.19-bullseye

COPY ./entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

WORKDIR /app

entrypoint ["/bin/bash", "/entrypoint.sh"]

EXPOSE 5000