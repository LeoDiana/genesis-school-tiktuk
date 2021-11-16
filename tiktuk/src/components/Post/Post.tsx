import React, { useState } from 'react';

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Typography,
} from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ReactPlayer from 'react-player';
import { PostProp } from './types';
import { shortenNumber } from '../../common/utils';

const Post = (postData: PostProp) => {
  const {
    text,
    authorMeta,
    videoUrl,
    diggCount,
    commentCount,
    hashtags,
  } = postData;

  const [playing, setPlaying] = useState(true);

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={(
          <Avatar
            alt={authorMeta.name}
            src={authorMeta.avatar}
          />
          )}
        title={(
          <Typography align="left" fontWeight={600}>
            {authorMeta.name}
          </Typography>
          )}
        subheader={(
          <Typography align="left">
            {text}
          </Typography>
          )}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid container item justifyContent="center">
            <ReactPlayer
              url={videoUrl}
              playing={playing}
              loop
              height={400}
              width={250}
              onClick={() => { setPlaying((p) => !p); }}
              controls
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
