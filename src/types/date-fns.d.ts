declare module 'date-fns' {
  export function format(date: Date | number, format: string, options?: { locale?: any }): string;
  // Add other functions from date-fns that you use
}
