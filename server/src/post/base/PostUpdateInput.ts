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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { Type } from "class-transformer";
import { CommunityWhereUniqueInput } from "../../community/base/CommunityWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class PostUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  body?: string | null;

  @ApiProperty({
    required: false,
    type: () => CommentUpdateManyWithoutPostsInput,
  })
  @ValidateNested()
  @Type(() => CommentUpdateManyWithoutPostsInput)
  @IsOptional()
  @Field(() => CommentUpdateManyWithoutPostsInput, {
    nullable: true,
  })
  comments?: CommentUpdateManyWithoutPostsInput;

  @ApiProperty({
    required: false,
    type: () => CommunityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CommunityWhereUniqueInput)
  @IsOptional()
  @Field(() => CommunityWhereUniqueInput, {
    nullable: true,
  })
  community?: CommunityWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  creator?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string;
}
export { PostUpdateInput };
