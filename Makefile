COMPOSE = docker compose
UP = $(COMPOSE) up
RUN_BACK = $(COMPOSE) run back

up:
	$(UP)
back:
	$(UP) back
front:
	$(UP) front
db:
	$(UP) db

build:
	$(COMPOSE) build

tidy:
	$(RUN_BACK) go mod tidy
