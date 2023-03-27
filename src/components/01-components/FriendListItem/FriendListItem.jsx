import {
  FriendListItemStatus,
  FriendListItemAvatar,
  FriendListItemName,
} from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <FriendListItemStatus isOnline={isOnline}></FriendListItemStatus>
      <FriendListItemAvatar src={avatar} alt={name} width="48" />
      <FriendListItemName>{name}</FriendListItemName>
    </>
  );
};
