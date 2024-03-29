import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiscountServiceBase } from "./base/discount.service.base";

@Injectable()
export class DiscountService extends DiscountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
