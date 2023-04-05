import React, { useCallback, useState } from 'react'
import { Modal, TextField, TextareaAutosize, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { modalState$ } from '../../redux/selector'
import FileBase64 from 'react-file-base64'
import { createPosts, hideModal } from '../../redux/actions';

const CreactePostModal = () => {
    const [data, setData] = useState({
        title: '',
        content: '',
        attachment: ''
    })

    const dispatch = useDispatch(modalState$)
    const { isShow } = useSelector(modalState$)

    const onSubmit = useCallback(() => {
        console.log({ data })
        dispatch(createPosts.createPostsRequest(data))
        dispatch(hideModal())
        setData({
            title: '',
            content: '',
            attachment: ''
        })
    }, [data, dispatch])

    const onClose = useCallback(() => {
        dispatch(hideModal())
    }, [dispatch])

    const body = (
        <div className='modal-body'>
            <h2>Create a new post!</h2>
            <form noValidate autoComplete='off'>
                <TextField
                    required
                    label='Title'
                    value={data.title}
                    onChange={(e) => setData({ ...data, title: e.target.value })}
                />
                <TextareaAutosize
                    minRows={10}
                    maxRows={15}
                    placeholder='Text your post here...'
                    value={data.content}
                    onChange={(e) => setData({ ...data, content: e.target.value })}
                />
                <FileBase64
                    accept='image/*'
                    multiple={false}
                    type='file'
                    value={data.attachment}
                    onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
                />
                <div>
                    <Button variant='contained' color='primary'
                        component='span' fullWidth
                        onClick={onSubmit}
                    >Create</Button>
                </div>
            </form>
        </div>
    )

    return (
        <div>
            <Modal open={isShow} onClose={onClose}>
                {body}
            </Modal>
        </div>
    )
}

export default CreactePostModal