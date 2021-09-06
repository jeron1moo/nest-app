import { Connection } from 'mongoose';
import { PostSchema } from './schemas/post.schema';
import { UserSchema } from './schemas/user.schema';

export const postProviders = [
  {
    provide: 'POST_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('POST', PostSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const userProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('USER', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
