export interface IResponseSuccess<T = unknown> {
  success: boolean;
  message: string;
  data: T
}

export interface IResponseError {
  success: boolean;
  message: string;
  data: []
}

// Respuesta completa manejada en el interceptor
export type ApiResponse<T> = IResponseSuccess<T> | IResponseError;

// Error en casos de errores HTTP (como 400, 500)
export interface HttpError {
  status: number;
  error: {
    message: string;
    [key: string]: any; // Puede tener otros campos definidos por el servidor
  };
  message?: string; // Angular a veces incluye un campo "message" aparte
}
