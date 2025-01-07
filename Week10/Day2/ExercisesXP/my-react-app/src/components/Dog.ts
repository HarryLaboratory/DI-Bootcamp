import Animal from './Animal';

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  public makeSound(): string {
    return "Bark";
  }
}

export default Dog;
