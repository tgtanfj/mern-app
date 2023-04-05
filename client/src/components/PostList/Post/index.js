import React, { useCallback } from 'react'
import { Card, Avatar, CardActions, CardContent, CardHeader, Typography, CardMedia, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { deletePosts, updatePosts } from '../../../redux/actions';

const Post = ({ post }) => {

    const dispatch = useDispatch()

    const onLikeClick = useCallback(() => {
        dispatch(updatePosts.updatePostsRequest({
            ...post, likeCount: post.likeCount + 1
        }))
    }, [dispatch, post])

    const onDeletePost = useCallback(() => {
        dispatch(deletePosts.deletePostsRequest(post))
        window.location.reload();
    }, [dispatch, post])

    return (
        <Card>
            <CardHeader avatar={<Avatar>A</Avatar>}
                title={post.author}
                subheader={moment(post.updatedAt).format('HH:MM MMM DD,YYYY')}
                action={
                    <IconButton>
                        <DeleteIcon onClick={onDeletePost} />
                    </IconButton>
                }
            />
            <CardMedia image={post.attachment} title="title" sx={{ height: '500px' }} />
            <CardContent>
                <Typography variant='h5' color='textPrimary'>
                    {post.title}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                    {post.content}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <FavoriteIcon onClick={onLikeClick} sx={post.likeCount >= 1 ? { color: '#ea2749' } : ''} />
                    <Typography component="span" color="textSecondary">{post.likeCount} likes</Typography>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Post