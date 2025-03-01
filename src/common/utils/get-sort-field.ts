import { DEFAULT_SORT_FIELD } from '../constants';

export const getSortField = (sortby?: string, allowedSortFields?: string[]) => {
  if (!sortby || !allowedSortFields) return DEFAULT_SORT_FIELD;
  return allowedSortFields.includes(sortby) ? sortby : DEFAULT_SORT_FIELD;
};
