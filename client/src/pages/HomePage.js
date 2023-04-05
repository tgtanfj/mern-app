import React, { useCallback } from 'react'
import { Container, Fab } from '@mui/material';
import Header from '../components/Header/Header';
import PostList from '../components/PostList/PostList';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/actions';
import CreactePostModal from '../components/CreatePostModal';

const HomePage = () => {
    const dispatch = useDispatch()
    const openCreatePostModal = useCallback(() => {
        dispatch(showModal())
    }, [dispatch])

    return (
        <Container maxWidth="lg">
            <Header />
            <PostList />
            <CreactePostModal />
            <div className="fab">
                <Fab color='primary' onClick={openCreatePostModal}>
                    <AddIcon />
                </Fab>
            </div>
        </Container>
    )
}

export default HomePage