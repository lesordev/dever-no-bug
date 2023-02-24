import { ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { apolloConfig } from './configs/apollo.config';
import { CoreModule } from './features/core/core.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>(apolloConfig),
    CoreModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
