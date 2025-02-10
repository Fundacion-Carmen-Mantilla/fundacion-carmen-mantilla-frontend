export interface DynamicFormField<T = string | number | boolean> {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'checkbox' | 'textarea';
  value?: T;
  required?: boolean;
  options?: { label: string; value: T }[];
  errorMessage?: string;
  // Nuevas propiedades
  placeholder?: string;
  pattern?: string | RegExp;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  customValidator?: (value: T) => boolean;
}
