import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { getUserFeed } from '../../api/apiCalls';
import { UserFeedItem } from '../../common/types';
import UserFeedElement from './UserFeedElement';

interface UserFeedProps {
    username: string,
}

const FALLBACK_VIDEO_URL = 'https://v58.tiktokcdn.com/video/tos/alisg/tos-alisg-pve-0037c001/e797c87fa0344db3ac305efbfee32ca8/?VExpiration=1637161163&VSignature=TiV9otDrmVpdm6kLy6YPEg&a=1233&br=2794&bt=1397&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wECRNFGnkag3-I&l=2021111708590701019020801346073C4E&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzdybTQ6Zjg5OTMzODczNEApZjg1N2loPGVnN2Y3ODM5OGdtaTMucjRfajZgLS1kMS1zcy0yLV9jX2I0NGFhYzRjMzQ6Yw%3D%3D&vl=&vr=';

const UserFeed = (props : UserFeedProps) => {
  const [posts, setPost] = useState<UserFeedItem[]>([]);
  const [playingVideo, setPlayingVideo] = useState('');
  const { username } = props;

  useEffect(() => {
    const getItem = async () => {
      setPost(await getUserFeed(username));
    };

    getItem();
  }, []);

  const onVideoClick = (id:string) => {
    setPlayingVideo((currId) => (currId === id ? '' : id));
  };

  return (
    posts.length > 0
      ? (
        <Grid container sx={{ maxWidth: 525 }} justifyContent="center">
          {posts.map((post) => {
            const videoUrl = ReactPlayer.canPlay(post.video.playAddr)
              ? post.video.playAddr : FALLBACK_VIDEO_URL;
            return (
              <UserFeedElement
                key={post.id}
                videoUrl={videoUrl}
                playCount={post.stats.playCount}
                playing={!!(playingVideo === post.id)}
                videoId={post.id}
                onClick={onVideoClick}
              />
            );
          })}
        </Grid>
      )
      : <Typography>The user has not posted any video yet</Typography>

  );
};

export default UserFeed;
