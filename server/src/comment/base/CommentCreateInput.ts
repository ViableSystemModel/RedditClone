/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { CommentLikeCreateNestedManyWithoutCommentsInput } from "./CommentLikeCreateNestedManyWithoutCommentsInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { PostWhereUniqueInput } from "../../post/base/PostWhereUniqueInput";
@InputType()
class CommentCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  body!: string;

  @ApiProperty({
    required: false,
    type: () => CommentLikeCreateNestedManyWithoutCommentsInput,
  })
  @ValidateNested()
  @Type(() => CommentLikeCreateNestedManyWithoutCommentsInput)
  @IsOptional()
  @Field(() => CommentLikeCreateNestedManyWithoutCommentsInput, {
    nullable: true,
  })
  commentLikes?: CommentLikeCreateNestedManyWithoutCommentsInput;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  creator!: UserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PostWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PostWhereUniqueInput)
  @Field(() => PostWhereUniqueInput)
  post!: PostWhereUniqueInput;
}
export { CommentCreateInput };
