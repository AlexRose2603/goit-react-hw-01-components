import PropTypes from 'prop-types';
import { List } from './FriendsList.styled';
import { FriendListItem } from './FriendsListItem/FriendListItem';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          ></FriendListItem>
        );
      })}
    </List>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
