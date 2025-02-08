import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfig } from './config/config.interface';
import { User } from './auth/user.entity';
import { Session } from './auth/session.entity';
import { AuthModule } from './auth/auth.module';
import { MastersModule } from './masters/masters.module';
import { CorsMiddleware } from '@nest-middlewares/cors';
import { Expansion } from './masters/expansions/expansions.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService<AppConfig>) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),
        synchronize: configService.get<boolean>('DB_SYNCHRONIZE'),
        autoLoadEntities: true,
        entities: [User, Session, Expansion],
        ssl: {
          rejectUnauthorized: false,
        },
        extra: {
          max: 5,
          connectionTimeoutMillis: 5000,
          ssl: {
            rejectUnauthorized: false,
          },
        },
      }),
    }),
    AuthModule,
    MastersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}
