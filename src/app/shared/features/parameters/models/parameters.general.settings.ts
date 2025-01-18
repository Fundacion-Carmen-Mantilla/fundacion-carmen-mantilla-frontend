export interface IResponseParametersGeneralSettings {
  success: boolean
  message: string
  data: Parameter<any>[]
}

export interface Partners {
  name: string;
  logo: string;
}

// Crear un índice genérico que mapee posibles valores
type ParameterMap = {
  partners: Partners;
  vision_years: number;
};

// Generalizar Parameter con la clave y los valores de ParameterMap
export interface Parameter<K extends keyof ParameterMap> {
  key: K;
  value: ParameterMap[K];
}
