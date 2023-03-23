import PropTypes from 'prop-types';
import { Recipe } from './Recipe';
import { List } from './RecipeList.styled';

export const RecipeList = ({ recipes }) => {
  return (
    <List>
      {recipes.map(recipe => (
        <li key={recipe.id}>
          <Recipe recipe={recipe} />
        </li>
      ))}
    </List>
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
