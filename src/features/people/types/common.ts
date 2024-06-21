export interface ListResponse<T> {
  count: number;
  next: string;
  previous: null;
  results: T[];
}
