import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar } from 'react-icons/hi';

export const Recipe = ({ recipe: { name, time, servings, calories } }) => {
  return (
    <div style={{ border: '1px solid black', marginLeft: '25px' }}>
      <h2>{name}</h2>
      <div>
        <div>
          <BsAlarm size="25" /> {time} min
        </div>
        <div>
          <HiOutlineChartPie size="25" /> {servings}servings
        </div>
        <div>
          <HiOutlineChartBar size="25" /> {calories} calories
        </div>
      </div>
      <h3>Difficulty</h3>
      <div>
        <span>Easy</span>
        <span>Medium</span>
        <span>Hard</span>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired,
};
