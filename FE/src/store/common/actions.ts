import { createAction } from 'redux-actions';

import { TCommon, CommonTypes } from './types';

export const initialCommon: TCommon = {
  error: {
    open: false,
    message: '',
    action: '',
  },
};

export const CommonRequestError = createAction(CommonTypes.COMMON_REQUEST_ERROR);
export const CommonCloseError = createAction(CommonTypes.COMMON_CLOSE_ERROR);
