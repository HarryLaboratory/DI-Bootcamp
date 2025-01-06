

export function validateUnionType(value: any, allowedTypes: string[]): boolean {
    // To check if the type of the value matches any of the allowed types
    return allowedTypes.some((type) => typeof value === type);
  }
  
