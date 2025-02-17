/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { put } from '@vercel/blob';

import { Injectable } from '@nestjs/common';

import { MulterFile } from '../../types';

type FileOptions = {
  path?: string;
  name?: string;
};

@Injectable()
export class FileUploadService {
  async uploadFile(file: MulterFile, options?: FileOptions): Promise<string> {
    const { path = '', name = '' } = options || {};

    if (!file) {
      throw new Error('File is required');
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const blob = await put(`${path}/${name}`, file.buffer, {
      access: 'public',
      addRandomSuffix: true,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      contentType: file.mimetype,
    });

    return blob.url;
  }
}
