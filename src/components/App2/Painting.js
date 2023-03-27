import PropTypes from 'prop-types';
import defaultImage from './default.jpg';

export const Painting = ({
  painting: { url = defaultImage, title, price, author = 'someone', quantity },
}) => {
  return (
    <>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={author.url}>{title}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: заканчивается или есть в наличии</p>
      <button type="button">Добавить в корзину</button>
    </>
  );
};

Painting.propTypes = {
  painting: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
};
