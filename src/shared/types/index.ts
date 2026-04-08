export interface IApiError {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}

export interface IPaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface IPaginationParams {
  page?: number;
  limit?: number;
}
