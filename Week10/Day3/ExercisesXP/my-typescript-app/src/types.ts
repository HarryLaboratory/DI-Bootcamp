export type Person = {
    name: string;
    age: number;
  };
  
  export type Address = {
    street: string;
    city: string;
  };
  
  export type Job = {
    position: 'Manager' | 'Developer'; 
    department: string;
  };
  
  export type Employee = Person & Job;  
  
  