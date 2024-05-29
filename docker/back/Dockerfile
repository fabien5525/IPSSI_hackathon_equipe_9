FROM python:3.9.19-bullseye

COPY ./entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

WORKDIR /app

ENTRYPOINT ["/bin/bash", "/entrypoint.sh"]

EXPOSE 5000