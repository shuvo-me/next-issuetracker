export type Issue = {
  title: string;
  description: string;
};

export type CreateIssuePrevState = {
  errors?: {
    title?: string[];
    description?: string[];
  };
  message?: string;
};
