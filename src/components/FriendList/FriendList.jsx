import PropTypes from 'prop-types';
import {
  ListFriends,
  FriendListItem,
  StatusOnline,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListFriends>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem key={id}>
            <StatusOnline isOnline={isOnline}>{isOnline}</StatusOnline>
            <FriendAvatar src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
          </FriendListItem>
        );
      })}
    </ListFriends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
