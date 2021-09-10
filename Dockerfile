FROM node:15.4.0

WORKDIR /app

RUN apt-get update && \
    apt-get install -y vim

COPY . .
RUN yarn install

EXPOSE 3000
CMD ["yarn", "run", "dev"]
