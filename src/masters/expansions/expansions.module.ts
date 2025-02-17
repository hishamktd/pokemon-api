import { Module } from '@nestjs/common';

import { ExpansionsController } from './expansions.controller';
import { ExpansionsRepository } from './expansions.repository';
import { ExpansionsService } from './expansions.service';
import { FileUploadService } from '../../common/services/file-upload.service';

@Module({
  providers: [ExpansionsRepository, ExpansionsService, FileUploadService],
  controllers: [ExpansionsController],
  exports: [],
})
export class ExpansionsModule {}
