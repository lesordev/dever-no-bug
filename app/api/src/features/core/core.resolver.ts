import { Query, Resolver } from '@nestjs/graphql';

@Resolver('user')
export class CoreResolver {
  @Query(() => String)
  helloWorld() {
    return 'Hello World';
  }
}
