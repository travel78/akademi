export interface ModalOptions<T = never> {
  width: T | string;
  disableClose: T | boolean;
  data?: Record<string, unknown> | null;
}
