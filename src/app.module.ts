import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DataModule } from './modules/data.module';
import { OrdersModule } from './modules/orders/orders.module';
import { join } from 'path';

@Module({
  imports: [
    DataModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/infra/graphql/schema.gql'),
    }),
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
