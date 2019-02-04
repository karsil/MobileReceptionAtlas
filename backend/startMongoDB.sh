#/bin/env bash


command=$(docker ps | awk '/mongo/ { print $2 } ')

if [[ $command ]]
then
    pid=$(docker ps | awk '/mongo/ { print $1 } ')
    echo "[docker-info] mongodb is already running on $pid"
    exit 0
fi

docker run --rm --name mongo-db -p 27017:27017 -d mongo:latest