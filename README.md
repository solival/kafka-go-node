# Kafka Go Node

Simple example of communications between Go and Node.js services using Kafka

Used examples

- Go: [https://github.com/sohamkamani/golang-kafka-example]
- Node: [https://github.com/tulios/kafkajs]

## Running

Run `docker-compose up`.
This will build and start all containers and start producing consuming messages.
## Troubleshooting

Typical problems and their resolution.

### Error: topic partition has no leader

Run `docker-compose down` and `docker-compose up`