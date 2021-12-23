import { ClientsModule, Transport } from '@nestjs/microservices';

function kafkaSettingsService() {
  return ClientsModule.registerAsync([
    {
      name: 'KafkaService',
      useFactory: () => ({
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: process.env.KAFKA_CLIENT_ID,
            brokers: [process.env.KAFKA_HOST],
            ssl: process.env.KAFKA_USE_SSL === 'true',
          },
          consumer: {
            groupId: process.env.KAFKA_CONSUMER_GROUP_ID,
          },
        },
      }),
    },
  ]);
}

export { kafkaSettingsService };
