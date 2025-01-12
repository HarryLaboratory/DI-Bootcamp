import { RecipeItem } from './RecipeItem';

export class RecipeCollection {
  recipes: RecipeItem[] = [];

  constructor() {
    this.loadRecipes();
  }

  addRecipe(recipe: RecipeItem): void {
    this.recipes.push(recipe);
    this.saveRecipes();
  }

  removeRecipe(id: string): void {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
    this.saveRecipes();
  }

  toggleFavorite(id: string): void {
    const recipe = this.recipes.find(recipe => recipe.id === id);
    if (recipe) {
      recipe.toggleFavorite();
      this.saveRecipes();
    }
  }

  saveRecipes(): void {
    localStorage.setItem('recipes', JSON.stringify(this.recipes));
  }

  loadRecipes(): void {
    const savedRecipes = localStorage.getItem('recipes');
    if (savedRecipes) {
      this.recipes = JSON.parse(savedRecipes).map((r: any) => new RecipeItem(r.title, r.ingredients, r.instructions));
    }
  }
}
