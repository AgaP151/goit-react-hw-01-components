import css from './App.module.css';

import { Profile } from './Profile/Profile';
import user from './Profile/user';

import { Statistics } from './Statistics/Statistic';
import data from './Statistics/data';

import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends';

import { TransactionHistory } from './TransactionHistory/TrasactionHistory';
import transactions from './TransactionHistory/transactions';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
