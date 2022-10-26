import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { PrismaService } from 'src/database/prismaService';

@Injectable()
export class ExpensesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateExpenseDto) {
    return await this.prisma.expenses.create({
      data,
    });
  }
  async findAll() {
    return await this.prisma.expenses.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.expenses.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, data: UpdateExpenseDto) {
    return await this.prisma.expenses.update({
      where: {
        id: id,
      },
      data: {
        description: data.description,
        expenses: data.expenses,
        date: data.date,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.expenses.delete({
      where: {
        id: id,
      },
    });
  }

  async filtered(searchString: string) {
    return await this.prisma.expenses.findMany({
      where: {
        description: {
          contains: searchString,
        },
      },
    });
  }
}
