/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { put } from '@vercel/blob';

import { Injectable } from '@nestjs/common';

import { MulterFile } from '../../types';

type FileOptions = {
  imageUrl?: string | null;
  path?: string;
  name?: string;
};

@Injectable()
export class FileUploadService {
  async uploadFile(
    file: MulterFile,
    options?: FileOptions,
  ): Promise<string | null> {
    const { imageUrl = null, path = '', name = '' } = options || {};

    if (!file) {
      return imageUrl || null;
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
