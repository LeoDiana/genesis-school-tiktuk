import React from 'react';

import {
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
} from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ReactPlayer from 'react-player';
import { PostProp } from './types';
import { shortenNumber } from '../../common/utils';
import UserHeader from '../User/UserHeader';

const Post = (postData: PostProp) => {
  const {
    text,
    authorMeta,
    videoUrl,
    diggCount,
    commentCount,
    hashtags,
    playing,
    videoId,
    onClick,
  } = postData;

  return (
    <Card sx={{ maxWidth: 500 }}>
      <UserHeader avatar={authorMeta.avatar} username={authorMeta.name} title={text} />
      <CardContent>
        <Grid container spacing={2}>
          <Grid container item justifyContent="center">
            <ReactPlayer
              url={videoUrl}
              playing={playing}
              loop
              height={400}
              width={250}
              onClick={() => { onClick(videoId); }}
              // controls
            />
          </Grid>
          <Grid item container spacing={2}>
            <Grid
              item
              container
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Grid item container xs="auto">
                <FavoriteIcon />
                <Typography>{shortenNumber(diggCount)}</Typography>
              </Grid>
              <Grid item container xs="auto">
                <CommentIcon />
                <Typography>{shortenNumber(commentCount)}</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              spacing={1}
            >
              {hashtags.length > 0 && hashtags.map((hashtag) => (
                <Grid item>
                  <Chip variant="outlined" size="small" label={`#${hashtag.name}`} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Post;
