# Agon UI

Angular frontend for the Agon competition application. 

It provides a hall-of-fame-type leaderboard on which the highscores of all previous game can be seen.
Each game is represented by a column which is fully customizable with a background and header image or color, as well as font and border colors. 

It also provides a ticker that rotates between the current game, header image and top scores on a full-screen web page. 

For an overview of all Agon components take a look at the [Agon Docker Compose repo](https://github.com/KevinVanthuyne/agon-docker-compose).

## Setup

### Local setup

* Install node
* Run `npm install` to install all dependencies.

### Docker setup

Build the Docker image:
```
docker build -t kevinvt/agon-ui .
```
Use Docker Compose to run [agon-docker-compose](https://github.com/KevinVanthuyne/agon-docker-compose) and run the entire application

## Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`

## Docker Hub

Push to Docker Hub:
```
docker push kevinvt/agon-ui:latest
```
