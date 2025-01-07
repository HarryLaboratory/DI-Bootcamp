class Animal {
    public name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    public makeSound(): string {
      return "Some generic animal sound";
    }
  }
  
  export default Animal;
  