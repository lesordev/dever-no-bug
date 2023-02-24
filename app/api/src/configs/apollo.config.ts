import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';

export const apolloConfig: ApolloDriverConfig = {
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/generated/schema.gql'),
  sortSchema: true,
  playground: true,
  path: '/api/admin',
  plugins: [],
};
