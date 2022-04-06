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
import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CommunityCreateNestedManyWithoutUsersInput } from "./CommunityCreateNestedManyWithoutUsersInput";
import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";
@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => CommentCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CommentCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CommentCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => CommunityCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CommunityCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CommunityCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  moderates?: CommunityCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => CommunityCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CommunityCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CommunityCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  ownedCommunities?: CommunityCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: () => PostCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => PostCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => PostCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  posts?: PostCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @Field(() => [String])
  roles!: Array<string>;

  @ApiProperty({
    required: false,
    type: () => CommunityCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CommunityCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CommunityCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  subscriptions?: CommunityCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { UserCreateInput };
