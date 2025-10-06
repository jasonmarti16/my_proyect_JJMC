/*import { Injectable } from '@nestjs/common';
import { PrismaClient, PrismaClientExtends } from '@prisma/client/extension';

@Injectable()
export class PrismaService extends PrismaClient {}*/


import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}