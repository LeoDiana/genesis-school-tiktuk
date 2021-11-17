import React from 'react';
import { useParams } from 'react-router-dom';
import UserFeed from '../components/User/UserFeed';
import UserInfo from '../components/User/UserInfo';

const DEFAULT_USERNAME = 'asyavlade';

const UserPage = () => {
  const { username } = useParams();

  return (
    <div>
      <UserInfo username={username || DEFAULT_USERNAME} />
      <UserFeed username={username || DEFAULT_USERNAME} />
    </div>
  );
};
export default UserPage;
