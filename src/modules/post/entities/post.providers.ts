import { Connection } from 'mongoose';
import { PostSchema } from './post.entity';

export const postProviders = [
  {
    provide: 'POST_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('POST', PostSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
