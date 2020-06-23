import React from 'react';
import Profile from './profile/Profile';
import user from './profile/user.json';
import Statistics from './statistics/Statistics';
import statistical from './statistics/statistical-data.json';
import FriendList from './friendList/FriendList';
import friends from './friendList/friends.json';
import TransactionHistory from './transactionHistory/TransactionHistory';
import transactions from './transactionHistory/transactions.json'

const App = () =>(
<div>
    <Profile user={user}/>
    <Statistics statist={statistical} />
    <FriendList items={friends}/>
    <TransactionHistory transHistory={transactions}/>
</div>
);

export default App;