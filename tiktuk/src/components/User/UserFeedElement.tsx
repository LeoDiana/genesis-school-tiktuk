import React from 'react';
import ReactPlayer from 'react-player';
import { Grid, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { shortenNumber } from '../../common/utils';
import Preloader from '../Preloader/Preloader';

interface UserFeedElementProps {
    videoUrl: string,
    playCount: number,
    playing: boolean,
    videoId: string,
    // eslint-disable-next-line no-unused-vars
    onClick: (videoId: string)=>void
  }

const UserFeedElement = ({
  videoUrl, playCount, playing, onClick, videoId,
}:UserFeedElementProps) => (
  <Grid item>
    <Grid item container xs="auto" justifyContent="center">
      <PlayArrowIcon />
      <Typography>{shortenNumber(playCount)}</Typography>
    </Grid>
    {!videoUrl ? <Preloader />
      : (
        <ReactPlayer
          url={videoUrl}
          playing={playing}
          loop
          height={300}
          width={175}
          onClick={() => { onClick(videoId); }}
        />
      )}
  </Grid>
);

export default UserFeedElement;
