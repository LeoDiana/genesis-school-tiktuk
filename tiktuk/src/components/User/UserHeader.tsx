import { CardHeader, Avatar, Typography } from '@mui/material';
import React from 'react';

interface UserHeaderProps {
  avatar: string;
  username: string;
  title: string;
}

const UserHeader = ({ avatar, username, title }: UserHeaderProps) => (
  <CardHeader
    avatar={(
      <Avatar
        alt={username}
        src={avatar}
        onClick={() => {
          console.log(`CLICK_${username}`);
        }}
      />
    )}
    title={(
      <Typography
        align="left"
        fontWeight={600}
        onClick={() => {
          console.log(`CLICK_${username}`);
        }}
      >
        {username}
      </Typography>
    )}
    subheader={<Typography align="left">{title}</Typography>}
  />
);

export default UserHeader;
