import React, { useEffect, useState } from 'react';

import { Typography, Pagination, Grid } from '@mui/material';
import Post from '../components/Post/Post';
import { getTrendingFeed } from '../api/apiCalls';
import { PostProp } from '../components/Post/types';
import { FeedProp } from './types';

const Feed = ({ postsPerPage, postsCount }:FeedProp) => {
  const [posts, setPosts] = useState<PostProp[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getFeed = async () => {
      setPosts(await getTrendingFeed());
    };

    getFeed();
  }, []);

  return (
    <>
      <Grid container direction="column" alignContent="center" spacing={2}>
        {posts.length > 0
          ? posts
            .slice(postsPerPage * (currentPage - 1), postsPerPage * currentPage)
            .map((post) => <Grid item><Post {...post} /></Grid>)
          : <Typography>Loading...</Typography>}

      </Grid>
      <Grid container justifyContent="center" marginTop={2}>
        <Pagination
          count={Math.ceil(postsCount / postsPerPage)}
          onChange={(e, page) => { setCurrentPage(page); }}
        />
      </Grid>
    </>
  );
};

export default Feed;
