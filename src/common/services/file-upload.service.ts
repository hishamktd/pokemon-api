/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { put } from '@vercel/blob';

import { Injectable } from '@nestjs/common';

import { MulterFile } from '../../types';

type FileOptions = {
  imageUrl?: string | undefined;
  path?: string;
  name?: string;
};

@Injectable()
export class FileUploadService {
  async uploadFile(
    file: MulterFile,
    options?: FileOptions,
  ): Promise<string | undefined> {
    const { imageUrl = undefined, path = '', name = '' } = options || {};

    if (!file) {
      return imageUrl;
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
