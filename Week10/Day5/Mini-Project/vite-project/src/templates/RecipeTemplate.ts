import { RecipeItem } from '../model/RecipeItem';
import { RecipeCollection } from '../model/RecipeCollection';

export class RecipeTemplate {
  recipeContainer: HTMLElement;
  recipeCollection: RecipeCollection;

  constructor(recipeCollection: RecipeCollection) {
    this.recipeContainer = document.getElementById('recipeContainer')!;
    this.recipeCollection = recipeCollection;
  }

  renderRecipes(): void {
    this.recipeContainer.innerHTML = '';
    this.recipeCollection.recipes.forEach((recipe) => {
      const card = this.createRecipeCard(recipe);
      this.recipeContainer.appendChild(card);
    });
  }

  createRecipeCard(recipe: RecipeItem): HTMLElement {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    
    const title = document.createElement('h3');
    title.textContent = recipe.title;
    card.appendChild(title);

    const ingredientsList = document.createElement('ul');
    recipe.ingredients.forEach(ingredient => {
      const ingredientItem = document.createElement('li');
      ingredientItem.textContent = ingredient;
      ingredientsList.appendChild(ingredientItem);
    });
    card.appendChild(ingredientsList);

    const instructions = document.createElement('p');
    instructions.textContent = recipe.instructions;
    card.appendChild(instructions);

    const favoriteButton = document.createElement('button');
    favoriteButton.textContent = recipe.isFavorite ? 'Unfavorite' : 'Favorite';
    favoriteButton.onclick = () => {
      this.recipeCollection.toggleFavorite(recipe.id);
      this.renderRecipes();
    };
    card.appendChild(favoriteButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
      this.recipeCollection.removeRecipe(recipe.id);
      this.renderRecipes();
    };
    card.appendChild(deleteButton);

    return card;
  }
}
