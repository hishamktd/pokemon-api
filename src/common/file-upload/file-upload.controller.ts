import { MulterFile } from 'src/types';

import { Controller, UploadedFile, Post } from '@nestjs/common';

import { FileUploadService } from './file-upload.service';

@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Post()
  async uploadFile(@UploadedFile() file: MulterFile) {
    return this.fileUploadService.uploadFile(file);
  }
}
