import React from 'react';
import UserFeed from '../components/User/UserFeed';
import UserInfo from '../components/User/UserInfo';

interface UserPageProps {
    username: string,
}

const UserPage = (props : UserPageProps) => {
  const { username } = props;

  return (
    <>
      <UserInfo username={username} />
      <UserFeed username={username} />
    </>
  );
};
export default UserPage;
