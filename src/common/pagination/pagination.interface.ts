export interface PaginationParams {
  page: number;
  size: number;
  query?: string;
  sortBy?: string;
  order?: 'ASC' | 'DESC';
}

interface PageOptionsDto {
  page: number;
  size: number;
}

export interface PageMetaDtoParameters {
  pageOptionsDto: PageOptionsDto;
  itemCount: number;
}

export interface TransformValue {
  value: string;
}
