all: mongodb server

tests: mongodb
	npm test

mongodb:
		./startMongoDB.sh

server: mongodb
	npm start

