import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '../common/prisma.service'; // ensure PrismaService is used if needed

@Module({
  imports: [], // Add other modules here if necessary (e.g., PrismaModule if Prisma is used in the service)
  providers: [UserService, PrismaService], // Make sure PrismaService is provided here if needed
  controllers: [UserController],
})
export class UserModule {} // Name module with correct casing
