/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TransporterService } from "../transporter.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TransporterCreateInput } from "./TransporterCreateInput";
import { Transporter } from "./Transporter";
import { TransporterFindManyArgs } from "./TransporterFindManyArgs";
import { TransporterWhereUniqueInput } from "./TransporterWhereUniqueInput";
import { TransporterUpdateInput } from "./TransporterUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TransporterControllerBase {
  constructor(
    protected readonly service: TransporterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Transporter })
  @nestAccessControl.UseRoles({
    resource: "Transporter",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTransporter(
    @common.Body() data: TransporterCreateInput
  ): Promise<Transporter> {
    return await this.service.createTransporter({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        price: true,
        timeSpent: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Transporter] })
  @ApiNestedQuery(TransporterFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Transporter",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async transporters(@common.Req() request: Request): Promise<Transporter[]> {
    const args = plainToClass(TransporterFindManyArgs, request.query);
    return this.service.transporters({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        price: true,
        timeSpent: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Transporter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Transporter",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async transporter(
    @common.Param() params: TransporterWhereUniqueInput
  ): Promise<Transporter | null> {
    const result = await this.service.transporter({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        price: true,
        timeSpent: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Transporter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Transporter",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTransporter(
    @common.Param() params: TransporterWhereUniqueInput,
    @common.Body() data: TransporterUpdateInput
  ): Promise<Transporter | null> {
    try {
      return await this.service.updateTransporter({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          price: true,
          timeSpent: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Transporter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Transporter",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTransporter(
    @common.Param() params: TransporterWhereUniqueInput
  ): Promise<Transporter | null> {
    try {
      return await this.service.deleteTransporter({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          price: true,
          timeSpent: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}