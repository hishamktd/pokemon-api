import { Injectable } from '@nestjs/common';
import { put } from '@vercel/blob';

type FileOptions = {
  imageUrl?: string | null;
  path?: string;
  name?: string;
};

@Injectable()
export class FileUploadService {
  async uploadFile(
    file: File | null,
    options?: FileOptions,
  ): Promise<string | null> {
    const { imageUrl = null, path = '', name = '' } = options || {};

    if (!file) {
      return imageUrl || null;
    }

    const blob = await put(`${path}/${name}`, file, {
      access: 'public',
      addRandomSuffix: true,
      contentType: file.type,
    });

    return blob.url;
  }
}
