export interface DynamicFormField<T = string | number | boolean> {
  name: string; // Nombre del campo (clave en el formulario)
  label: string; // Etiqueta a mostrar
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'checkbox' | 'textarea'; // Tipo de input
  value?: T; // Valor predefinido
  required?: boolean; // Si es requerido
  options?: { label: string; value: T }[]; // Opciones (solo si es `select`)
  errorMessage?: string; // Mensaje de validación
}
