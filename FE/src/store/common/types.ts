export enum CommonTypes {
  COMMON_REQUEST_ERROR = '@common/COMMON_REQUEST_ERROR',
  COMMON_CLOSE_ERROR = '@common/COMMON_CLOSE_ERROR',
}

export interface TCommon {
  error: {
    open: boolean;
    message: string;
    action: string;
    timeout?: number | null;
  };
}
