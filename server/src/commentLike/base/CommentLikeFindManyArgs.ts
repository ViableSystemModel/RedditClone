/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommentLikeWhereInput } from "./CommentLikeWhereInput";
import { Type } from "class-transformer";
import { CommentLikeOrderByInput } from "./CommentLikeOrderByInput";

@ArgsType()
class CommentLikeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CommentLikeWhereInput,
  })
  @Field(() => CommentLikeWhereInput, { nullable: true })
  @Type(() => CommentLikeWhereInput)
  where?: CommentLikeWhereInput;

  @ApiProperty({
    required: false,
    type: [CommentLikeOrderByInput],
  })
  @Field(() => [CommentLikeOrderByInput], { nullable: true })
  @Type(() => CommentLikeOrderByInput)
  orderBy?: Array<CommentLikeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CommentLikeFindManyArgs };