/* eslint-disable no-unused-vars */
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
import InView, { useInView } from 'react-intersection-observer';
import { shortenNumber } from '../../common/utils';
import UserHeader from '../User/UserHeader';
import { AuthorMeta, Hashtag } from '../../common/types';
import Preloader from '../Preloader/Preloader';

interface PostProp {
  id: string;
  text: string;
  authorMeta: AuthorMeta;
  videoUrl: string;
  diggCount: number;
  commentCount: number;
  hashtags: Hashtag[];
  playing: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick: (videoId: string)=>void;
  // eslint-disable-next-line no-unused-vars
  inView: (videoId: string)=>void;
  [others: string]: any;
}

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
    inView,
  } = postData;

  const { ref } = useInView({
    threshold: 1,
  });

  return (
    <InView threshold={0.8} as="div" onChange={(isInView, entry) => { if (isInView) { inView(videoId); } }}>
      <Card sx={{ maxWidth: 500 }} ref={ref}>
        <UserHeader avatar={authorMeta.avatar} username={authorMeta.name} title={text} />
        <CardContent>
          <Grid container spacing={2}>
            <Grid container item justifyContent="center">
              { !videoUrl ? <Preloader />
                : (
                  <ReactPlayer
                    url={videoUrl}
                    playing={playing}
                    loop
                    height={400}
                    width={250}
                    onClick={() => { onClick(videoId); }}
                  />
                )}
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
                  <Grid item key={hashtag.name}>
                    <Chip variant="outlined" size="small" label={`#${hashtag.name}`} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </InView>
  );
};

export default Post;
