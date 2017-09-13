#!/usr/bin/env bash

source env/.env

if [ "$1" == "build" ]; then
  docker-compose build
fi

docker-compose up
