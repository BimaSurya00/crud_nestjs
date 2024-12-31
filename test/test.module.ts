import { Module } from '@nestjs/common';
import { TestService } from './test.service';

@Module({
  providers: [TestService],
  imports: [],
})
export class TestModule {}
