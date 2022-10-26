import { Module } from '@nestjs/common';
import { IncomesModule } from './modules/incomes/incomes.module';
import { ExpensesModule } from './modules/expenses/expenses.module';

@Module({
  imports: [IncomesModule, ExpensesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
