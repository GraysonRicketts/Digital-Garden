type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: void };
type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

export type Res<T> = XOR<AppError, Data<T>>;

export type AppError = {
  error: CodedError;
};

export type CodedError = {
  code: number;
  message: string;
};

export type Data<T> = {
  data: T;
};
