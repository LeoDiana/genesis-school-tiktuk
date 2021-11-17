import React, { useEffect, useState } from 'react';

import { Typography, Pagination, Grid } from '@mui/material';
import Post from '../components/Post/Post';
import { getTrendingFeed } from '../api/apiCalls';
import { FeedProp } from './types';
import { TrendingFeedItem } from '../common/types';

const Feed = ({ postsPerPage, postsCount }: FeedProp) => {
  const [posts, setPosts] = useState<TrendingFeedItem[]>([]);
  const [playingVideo, setPlayingVideo] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getFeed = async () => {
      const response = await getTrendingFeed();
      setPosts(response);
      setPlayingVideo(response[0].id);
      console.log(response[0].id);
    };

    getFeed();
  }, []);

  const onVideoClick = (id: string) => {
    console.log(id);
    setPlayingVideo((currId) => (currId === id ? '' : id));
  };

  return (
    <>
      <Grid container direction="column" alignContent="center" spacing={2}>
        {posts.length > 0 ? (
          posts
            .slice(postsPerPage * (currentPage - 1), postsPerPage * currentPage)
            .map((post) => (
              <Grid item>
                <Post
                  {...post}
                  onClick={onVideoClick}
                  playing={!!(playingVideo === post.id)}
                  videoId={post.id}
                />
              </Grid>
            ))
        ) : (
          <Typography>Loading...</Typography>
        )}
      </Grid>
      <Grid container justifyContent="center" marginTop={2}>
        <Pagination
          count={Math.ceil(postsCount / postsPerPage)}
          onChange={(e, page) => {
            setCurrentPage(page);
          }}
        />
      </Grid>
    </>
  );
};

export default Feed;
