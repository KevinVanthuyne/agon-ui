# Scored UI

Angular frontend for the Scored bot.

## Setup

### Local setup

* Install node
* Run `npm install` to install all dependencies.

### Docker setup

Build the Docker image:
```
docker build -t kevinvt/scored-ui .
```
Use Docker Compose to run [scored-docker-compose](https://github.com/KevinVanthuyne/scored-docker-compose) and run the entire application

## Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`

## Docker Hub

Push to Docker Hub:
```
docker push kevinvt/scored-ui:latest
```
