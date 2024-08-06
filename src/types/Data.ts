export interface Survey {
  name: string;
  description: string;
  costPerEntry: number;

  fields: Array<{
    type: "categorical" | "numerical" | "boolean";
    // Categorical
    categories?: string[];

    // Numerical
    min?: number;
    step?: number;
    max?: number;
  }>;
}
