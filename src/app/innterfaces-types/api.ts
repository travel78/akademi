export interface IListResponse<T> {
  data: T[];
  metadata: IMetadata;
}

export interface IMetadata {
  page: number;
  perPage?: number;
  total?: number;
}
