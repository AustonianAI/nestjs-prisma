import { OnApplicationShutdown, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService extends PrismaClient implements OnApplicationShutdown {
  async onApplicationShutdown(signal: string) {
    console.log(`Received signal to shutdown: ${signal}`);
    await this.$disconnect();
  }
}
