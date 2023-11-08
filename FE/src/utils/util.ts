import { errorCode } from "@/constants";

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePassword = (password: string) => {
  return String(password).match(/^(?=.*\d)(?=.*[A-Z]).{8,30}/);
};

export const handleErrorCode = (response: any) => {
  return errorCode[response.errorCode as keyof typeof errorCode];
};

export const localStorageHelper = {
  setItem: (key: string, value: any) => {
    let valueStringify = value;
    if (typeof value === "object") {
      valueStringify = JSON.stringify(value);
    }
    localStorage.setItem(key, valueStringify);
  },
  getItem: (key: string, options?: { isObject: boolean }) => {
    const value = localStorage.getItem(key);
    if (value && options?.isObject) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    }
    return value;
  },
  removeItem: (key: string) => {
    localStorage.removeItem(key);
  },
  isLogin: () => {
    return !!localStorageHelper.getItem(
      process.env.REACT_APP_ACCESS_TOKEN_KEY!
    );
  },
};