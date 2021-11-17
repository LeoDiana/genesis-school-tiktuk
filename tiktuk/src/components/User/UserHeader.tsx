import { CardHeader, Avatar, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  myTextStyle: {
    '&:link': {
      textDecoration: 'none',
      color: 'black',
    },
    '&:visited': {
      color: 'black',
    },
  },
});
interface UserHeaderProps {
  avatar: string;
  username: string;
  title: string;
}

const UserHeader = ({ avatar, username, title }: UserHeaderProps) => {
  const classes = useStyles();
  return (
    <CardHeader
      avatar={(
        <NavLink to={`/user/${username}`}>
          <Avatar
            alt={username}
            src={avatar}
          />
        </NavLink>
    )}
      title={(
        <NavLink to={`/user/${username}`} className={classes.myTextStyle}>
          <Typography
            align="left"
            fontWeight={600}
          >
            {username}
          </Typography>
        </NavLink>
    )}
      subheader={<Typography align="left">{title}</Typography>}
    />
  );
};

export default UserHeader;
