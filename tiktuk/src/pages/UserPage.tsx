import { Grid } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import UserFeed from '../components/User/UserFeed';
import UserInfo from '../components/User/UserInfo';

const DEFAULT_USERNAME = 'asyavlade';

const UserPage = () => {
  const { username } = useParams();

  return (
    <Grid container direction="column" alignContent="center" spacing={2}>
      <Grid item>
        <UserInfo username={username || DEFAULT_USERNAME} />
      </Grid>
      <Grid item>
        <UserFeed username={username || DEFAULT_USERNAME} />
      </Grid>
    </Grid>
  );
};
export default UserPage;
