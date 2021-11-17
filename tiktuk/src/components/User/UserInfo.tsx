import React, { useEffect, useState } from 'react';
import {
  Avatar, Card, CardHeader, Typography, Grid, CardContent,
} from '@mui/material';
import { getUserInfo } from '../../api/apiCalls';
import { shortenNumber } from '../../common/utils';

interface UserInfoProps {
    username: string,
}

interface UserInfoState {
    uniqueId: string,
    nickname: string,
    signature: string,
    avatar: string,
    followerCount:number,
    followingCount:number,
    heartCount:number
}

const UserInfo = (props : UserInfoProps) => {
  const initialUserInfoState = {
    uniqueId: '',
    nickname: '',
    signature: '',
    avatar: '',
    followerCount: 0,
    followingCount: 0,
    heartCount: 0,
  } as UserInfoState;

  const [userInfo, setUserInfo] = useState<UserInfoState>(initialUserInfoState);
  const { username } = props;

  useEffect(() => {
    const getInfo = async () => {
      const response = await getUserInfo(username);
      setUserInfo({
        uniqueId: response.user.uniqueId,
        nickname: response.user.nickname,
        signature: response.user.signature,
        avatar: response.user.avatarThumb,
        followerCount: response.stats.followerCount,
        followingCount: response.stats.followingCount,
        heartCount: response.stats.heartCount,
      });
    };

    getInfo();
  }, []);

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={(
          <Avatar
            alt={userInfo.nickname}
            src={userInfo.avatar}
          />
        )}
        title={(
          <Typography align="left" fontWeight={600}>
            {userInfo.uniqueId}
          </Typography>
        )}
        subheader={(
          <Typography align="left">
            {userInfo.nickname}
          </Typography>
        )}
      />
      <CardContent>
        <Grid container justifyContent="space-around">
          <Grid item xs={4} alignItems="center" container direction="column">
            <Typography fontWeight={600}>{shortenNumber(userInfo.followingCount)}</Typography>
            <Typography>Following</Typography>
          </Grid>
          <Grid item xs={4} alignItems="center" container direction="column">
            <Typography fontWeight={600}>{shortenNumber(userInfo.followerCount)}</Typography>
            <Typography>Followers</Typography>
          </Grid>
          <Grid item xs={4} alignItems="center" container direction="column">
            <Typography fontWeight={600}>{shortenNumber(userInfo.heartCount)}</Typography>
            <Typography>Likes</Typography>
          </Grid>
        </Grid>
        <Typography marginTop={2} whiteSpace="pre-line">{userInfo.signature}</Typography>
      </CardContent>
    </Card>
  );
};
export default UserInfo;
