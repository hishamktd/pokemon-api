import { MulterFile } from 'src/types';

import {
  Controller,
  UploadedFile,
  Post,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { FileUploadService } from './file-upload.service';

@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: MulterFile,
    @Body() body: { path?: string; name?: string },
  ) {
    return this.fileUploadService.uploadFile(file, {
      path: body.path,
      name: body.name,
    });
  }
}
