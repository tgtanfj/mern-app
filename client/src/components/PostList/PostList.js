import React, { useEffect } from 'react'
import { Container, Grid } from '@mui/material';
import Post from './Post'

import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import { postsState$ } from '../../redux/selector'

const PostList = () => {

  const dispatch = useDispatch()
  const posts = useSelector(postsState$)

  console.log('fdafdas', posts)

  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest())
  }, [dispatch])

  return (
    <Grid container spacing={2} alignItems='stretch'>
      {
        posts.map(post =>
          <Grid item xm={12} sm={6}>
            <Post key={post._id} post={post} />
          </Grid>
        )}
    </Grid>
  )
}

export default PostList