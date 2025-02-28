import { put } from '@vercel/blob';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { MulterFile } from '../../types';

type FileOptions = {
  path?: string;
  name?: string;
};

@Injectable()
export class FileUploadService {
  constructor(private configService: ConfigService) {}

  async uploadFile(file: MulterFile, options?: FileOptions): Promise<string> {
    const { path = '', name = '' } = options || {};

    if (!file) {
      throw new Error('File is required');
    }

    const filePath = this.configService.get<string>('TEST_PATH') || path;

    const blob = await put(`${filePath}/${name}`, file.buffer, {
      access: 'public',
      addRandomSuffix: true,
      contentType: file.mimetype,
    });

    return blob.url;
  }
}
