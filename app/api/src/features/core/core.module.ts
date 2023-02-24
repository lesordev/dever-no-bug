import { Module } from '@nestjs/common';
import { CoreResolver } from './core.resolver';

@Module({
  imports: [],
  providers: [CoreResolver],
})
export class CoreModule {}
