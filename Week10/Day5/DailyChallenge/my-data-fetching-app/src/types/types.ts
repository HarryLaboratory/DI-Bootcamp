export interface Recipe {
    id: number;
    name: string;
    description: string;
    calories: number;
    ingredients: string[];
  }
  
  export interface FetchDataState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
  }
  