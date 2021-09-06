import { Document } from 'mongoose';

export interface IPost extends Document {
  readonly id: string;
  readonly content: string;
  readonly title: string;
}
