import { RecipeList } from './RecipeList';
import recipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <RecipeList recipes={recipes} />
      <GlobalStyle />
    </>
  );
};
