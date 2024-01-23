/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TransporterWhereInput } from "./TransporterWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TransporterOrderByInput } from "./TransporterOrderByInput";

@ArgsType()
class TransporterFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TransporterWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TransporterWhereInput, { nullable: true })
  @Type(() => TransporterWhereInput)
  where?: TransporterWhereInput;

  @ApiProperty({
    required: false,
    type: [TransporterOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TransporterOrderByInput], { nullable: true })
  @Type(() => TransporterOrderByInput)
  orderBy?: Array<TransporterOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TransporterFindManyArgs as TransporterFindManyArgs };