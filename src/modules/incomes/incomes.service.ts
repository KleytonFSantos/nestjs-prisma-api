import { Injectable } from '@nestjs/common';
import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
import { PrismaService } from 'src/database/prismaService';

@Injectable()
export class IncomesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateIncomeDto) {
    const incomes = await this.prisma.incomes.create({
      data,
    });

    return incomes;
  }

  async findAll() {
    const data = await this.prisma.incomes.findMany();
    return data;
  }

  async findOne(id: number) {
    const data = await this.prisma.incomes.findFirst({
      where: {
        id: id,
      },
    });
    return data;
  }

  async update(id: number, data: UpdateIncomeDto) {
    const updateIncome = await this.prisma.incomes.update({
      where: {
        id: id,
      },
      data: {
        description: data.description,
        incomes: data.incomes,
        date: data.date,
      },
    });
    return updateIncome;
  }

  async remove(id: number) {
    const data = await this.prisma.incomes.delete({
      where: {
        id: id,
      },
    });

    return data;
  }

  async filteredIncomes(searchString: string) {
    console.log(searchString);
    const filteredData = await this.prisma.incomes.findMany({
      where: {
        description: {
          contains: searchString,
        },
      },
    });

    return filteredData;
  }
}
