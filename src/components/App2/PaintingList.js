import PropTypes from 'prop-types';
import { Painting } from './Painting';

export const PaintingList = ({ paintings }) => {
  return (
    <ul>
      {paintings.map(painting => (
        <li key={painting.id}>
          <Painting painting={painting} />
        </li>
      ))}
    </ul>
  );
};

PaintingList.propType = {
  paintings: PropTypes.arrayOf(
    //масив, далі описуємо масив об*ктів
    PropTypes.shape({
      //shape - об*єкт
      // об*єкт определенной форми - форма - id
      //shape  не точное совпадение(тільки id і може, ще щось)exact
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
