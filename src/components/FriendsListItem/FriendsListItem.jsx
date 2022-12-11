import PropTypes from 'prop-types';
import {
  FriendListItemElem,
  StatusOnline,
  FriendAvatar,
  FriendName,
} from './FriendsListItem.styled.js';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendListItemElem>
      <StatusOnline isOnline={isOnline}>{isOnline}</StatusOnline>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendListItemElem>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
