import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TransporterModuleBase } from "./base/transporter.module.base";
import { TransporterService } from "./transporter.service";
import { TransporterController } from "./transporter.controller";
import { TransporterResolver } from "./transporter.resolver";

@Module({
  imports: [TransporterModuleBase, forwardRef(() => AuthModule)],
  controllers: [TransporterController],
  providers: [TransporterService, TransporterResolver],
  exports: [TransporterService],
})
export class TransporterModule {}
