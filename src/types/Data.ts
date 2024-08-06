export interface Survey {
  name: string;
  description: string;
  costPerEntry: number;

  fields: Array<{
    type: "categorical" | "numerical" | "freetext";
    // Categorical
    categories?: string[];

    // Numerical
    min?: number;
    step?: number;
    max?: number;

    // Freetext
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
  }>;
}
