export interface Response<T>{
    dados: T;
    status: Boolean;
    message: string;
}