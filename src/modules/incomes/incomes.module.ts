import { Module } from '@nestjs/common';
import { IncomesService } from './incomes.service';
import { IncomesController } from './incomes.controller';
import { PrismaService } from 'src/database/prismaService';

@Module({
  controllers: [IncomesController],
  providers: [IncomesService, PrismaService],
})
export class IncomesModule {}
