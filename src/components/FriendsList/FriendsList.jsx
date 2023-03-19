import PropTypes from 'prop-types';
import {
  List,
  Item,
  Status,
  Avatar,
  Online,
  Offline,
  Name,
} from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <Item key={friend.id}>
          <Avatar src={friend.avatar} alt="User avatar" width="48" />
          <Name>{friend.name}</Name>
          <Status>{friend.isOnline}</Status>
          {friend.isOnline ? (
            <p>
              <Online>Online</Online>
            </p>
          ) : (
            <p>
              <Offline>Offline</Offline>
            </p>
          )}
        </Item>
      ))}
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
