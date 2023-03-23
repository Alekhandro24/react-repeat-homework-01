import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar } from 'react-icons/hi';
import {
  RecipeInfo,
  InfoBlock,
  BadgeList,
  Badge,
  Image,
  Container,
  Title,
} from './Recipe.styled';

export const Recipe = ({
  recipe: { name, time, servings, calories, difficulty, image },
}) => {
  return (
    <Container>
      <Title>{name}</Title>
      <Image src={image} alt={name} width="320" />
      <RecipeInfo>
        <InfoBlock>
          <BsAlarm size="25" /> <span>{time} min</span>
        </InfoBlock>
        <InfoBlock>
          <HiOutlineChartPie size="25" /> <span>{servings} servings</span>
        </InfoBlock>
        <InfoBlock>
          <HiOutlineChartBar size="25" /> <span>{calories} calories</span>
        </InfoBlock>
      </RecipeInfo>
      <h3>Difficulty</h3>
      <BadgeList>
        <Badge isActive={difficulty === 'easy'}>Easy </Badge>
        <Badge isActive={difficulty === 'medium'}>Medium </Badge>
        <Badge isActive={difficulty === 'hard'}>Hard </Badge>
      </BadgeList>
    </Container>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
    image: PropTypes.string,
  }).isRequired,
};
