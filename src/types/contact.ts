export interface ContactActionState {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
}

export const initialContactState: ContactActionState = {
  success: false,
};

