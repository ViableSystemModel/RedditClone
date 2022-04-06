import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CommentLikeResolverBase } from "./base/commentLike.resolver.base";
import { CommentLike } from "./base/CommentLike";
import { CommentLikeService } from "./commentLike.service";

@graphql.Resolver(() => CommentLike)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CommentLikeResolver extends CommentLikeResolverBase {
  constructor(
    protected readonly service: CommentLikeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
