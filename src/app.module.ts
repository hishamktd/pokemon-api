import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfig } from './config/config.interface';
import { User } from './auth/user.entity';
import { Session } from './auth/session.entity';
import { AuthModule } from './auth/auth.module';

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
        entities: [User, Session],
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
      }),
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
