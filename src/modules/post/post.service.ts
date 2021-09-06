import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { IPost } from './interface/post.interface';
import { Model } from 'mongoose';
import { ApiBody } from '@nestjs/swagger';

@Injectable()
export class PostService {
  constructor(
    @Inject('POST_MODEL')
    private posts: Model<IPost>,
  ) {}

  create = async (createPostDto: CreatePostDto) => {
    const createdPost = new this.posts(createPostDto);
    return createdPost.save();
  };

  findAll = async () => {
    return this.posts.find({}).exec();
  };

  findOne(id: string) {
    return this.posts.find({ _id: id }).exec();
  }

  @ApiBody({ type: UpdatePostDto })
  update(id: string, updatePostDto: UpdatePostDto) {
    return this.posts
      .findOneAndUpdate(
        { _id: id },
        {
          $set: {
            ...updatePostDto,
          },
          new: true,
        },
      )
      .exec();
  }

  remove(id: string) {
    return this.posts.findOneAndDelete({ _id: id }).exec();
  }
}
