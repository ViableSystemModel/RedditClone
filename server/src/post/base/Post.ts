/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsDate } from "class-validator";
import { Comment } from "../../comment/base/Comment";
import { Type } from "class-transformer";
import { Community } from "../../community/base/Community";
import { User } from "../../user/base/User";
import { PostLike } from "../../postLike/base/PostLike";
@ObjectType()
class Post {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  body!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Comment],
  })
  @ValidateNested()
  @Type(() => Comment)
  @IsOptional()
  comments?: Array<Comment>;

  @ApiProperty({
    required: true,
    type: () => Community,
  })
  @ValidateNested()
  @Type(() => Community)
  community?: Community;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  creator?: User;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [PostLike],
  })
  @ValidateNested()
  @Type(() => PostLike)
  @IsOptional()
  postLikes?: Array<PostLike>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Post };
