import { Connection } from 'mongoose';
import { UserSchema } from './user.entity';

export const userProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('USER', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
