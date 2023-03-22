import PropTypes from 'prop-types';
import { Recipe } from './Recipe';

export const RecipeList = ({ recipes }) => {
  return (
    <ul>
      {recipes.map(recipe => (
        <li key={recipe.id}>
          <Recipe recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};

RecipeList.propType = {
  recipes: PropTypes.arrayOf(
    //масив, далі описуємо масив об*ктів
    PropTypes.shape({
      // об*єкт определенной форми - форма - id
      //shape  не точное совпадение(тільки id і може, ще щось)exact
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
