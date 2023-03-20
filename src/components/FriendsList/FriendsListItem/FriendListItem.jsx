import {
  ListItem,
  Status,
  Avatar,
  Online,
  Offline,
  Name,
} from './FriendListItem.styled';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <ListItem key={id}>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
      <Status>{isOnline}</Status>
      {isOnline ? (
        <p>
          <Online>Online</Online>
        </p>
      ) : (
        <p>
          <Offline>Offline</Offline>
        </p>
      )}
    </ListItem>
  );
};
