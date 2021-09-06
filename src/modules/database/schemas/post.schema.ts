import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  content: String,
  title: String,
});
