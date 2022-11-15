import PropTypes from 'prop-types';
import {
  Card,
  Description,
  AvatarImg,
  UserName,
  UserTag,
  UserLocation,
  StatsList,
  StatsItem,
  StatLabel,
  StatQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const keys = Object.keys(stats);
  return (
    <Card>
      <Description>
        <AvatarImg src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <StatsList>
        {keys.map(item => {
          return (
            <StatsItem key={item}>
              <StatLabel>{item}</StatLabel>
              <StatQuantity>{stats[item]}</StatQuantity>
            </StatsItem>
          );
        })}
      </StatsList>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
