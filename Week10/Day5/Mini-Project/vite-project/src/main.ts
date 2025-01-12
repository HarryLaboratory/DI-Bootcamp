import { RecipeItem } from './model/RecipeItem';
import { RecipeCollection } from './model/RecipeCollection';
import { RecipeTemplate } from './templates/RecipeTemplate';

const recipeCollection = new RecipeCollection();
const recipeTemplate = new RecipeTemplate(recipeCollection);

// To load saved recipes and render them on page load
window.onload = () => {
  recipeTemplate.renderRecipes();
};

const form = document.getElementById('recipeEntryForm') as HTMLFormElement;
const clearButton = document.getElementById('clearRecipesButton') as HTMLButtonElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = (document.getElementById('recipeTitle') as HTMLInputElement).value;
  const ingredientsText = (document.getElementById('ingredients') as HTMLTextAreaElement).value;
  const instructions = (document.getElementById('instructions') as HTMLTextAreaElement).value;

  const ingredients = ingredientsText.split('\n').map(ingredient => ingredient.trim()).filter(ingredient => ingredient !== '');
  
  const newRecipe = new RecipeItem(title, ingredients, instructions);
  recipeCollection.addRecipe(newRecipe);
  recipeTemplate.renderRecipes();

  form.reset();
});

clearButton.addEventListener('click', () => {
  localStorage.removeItem('recipes');
  recipeCollection.recipes = [];
  recipeTemplate.renderRecipes();
});

