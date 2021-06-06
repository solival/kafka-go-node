const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka:9092'],
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'test-group' });

const run = async () => {
  await producer.connect();
  await producer.send({
    topic: 'message-log',
    messages: [
      { value: 'Hello KafkaJS user' },
    ],
  });

  await consumer.connect();
  await consumer.subscribe({ topic: 'message-log', fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

run().catch(console.error);
