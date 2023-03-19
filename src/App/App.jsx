import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { User } from '../components/User/User';
import { Statistics } from '../components/Statistics/Statistics';
import { FriendsList } from 'components/FriendsList/FriendsList';
import { TransactionHistory } from 'components/Transactions/Transactions';

export const App = () => {
  return (
    <div>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
