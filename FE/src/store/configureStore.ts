import { enableMapSet } from 'immer';
import { applyMiddleware, createStore, Middleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import { AuthActionTypes } from './auth/types';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const configStorage: any = {
  key: 'root',
  storage,
  whitelist: ['auth', 'userProfile', 'tradingSpot'],
  debug: false, // to get useful logging
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  process.env.NODE_ENV === 'production'
    ? compose
    : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose;

const appReducer = (state: any, action: any) => {
  if (action.type === AuthActionTypes.USER_LOGOUT) {
    storage.removeItem('persist:root');
    storage.removeItem('jwt');
    storage.removeItem('refresh_token');
    storage.removeItem('email');
    storage.removeItem('systemFilter');
    storage.removeItem('systemFilterArbitrage');
    window.localStorage.removeItem('systemFilterArbitrageId');
    storage.removeItem('hide-popup-ads');
    const isInLoginPageRequested = window.location.pathname === '/sign-in';
    const isInRegisterPageRequested = window.location.pathname === '/register';

    if (!isInLoginPageRequested && !isInRegisterPageRequested) {
      window.location.href = '/sign-in';
    }

    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return rootReducer(state, action);
};

export type TRootState = ReturnType<typeof rootReducer>;

const loggerMiddleware: Middleware<{}, TRootState> = (store) => (next) => (action) => {
  if (process.env.NODE_ENV !== 'production') {
    // console.log('store', store.getState());
    // console.log('action', action);
  }
  next(action);
};

const configureStore = () => {
  enableMapSet();
  const sagaMiddleware = createSagaMiddleware();
  const reducers = persistReducer(configStorage, appReducer);
  const middlewareEnhancer = composeEnhancers(applyMiddleware(sagaMiddleware, loggerMiddleware));
  const store = createStore(reducers, undefined, middlewareEnhancer);
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};
export const { store, persistor } = configureStore();
