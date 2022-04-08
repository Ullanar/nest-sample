import { createConnection } from 'typeorm';
import { Task } from '../models/task.entity';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'root',
        password: 'root',
        database: 'postgres',
        entities: [Task],
        synchronize: true,
      }),
  },
];
