import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Session } from './auth/session.entity';
import { User } from './auth/user.entity';
import { FileUploadModule } from './common/file-upload/file-upload.module';
import { AppConfig } from './config/config.interface';
import configuration from './config/configuration';
import { Expansion } from './masters/expansions/expansions.entity';
import { MastersModule } from './masters/masters.module';

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
    FileUploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
