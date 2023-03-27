import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendListUl, FriendListLi } from './FriendsList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListUl>
      {friends.map(friend => (
        <FriendListLi key={friend.id}>
          <FriendListItem friend={friend} />
        </FriendListLi>
      ))}
    </FriendListUl>
  );
};
