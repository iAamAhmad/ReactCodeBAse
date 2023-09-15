/* eslint-disable react-hooks/exhaustive-deps */
import { Close, Create, MusicNote, TextFields, Note, AttachFile, Crop, Timer, Send } from '@mui/icons-material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { db, storage, firebase } from '../firebase'
import './Preview.css'
import { resetCameraImage, selectCameraImage } from '../features/cameraSlice'
import { v4 as uuid } from 'uuid'

const Preview = () => {
    const cameraImage = useSelector(selectCameraImage);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!cameraImage) {
            navigate('/');
        }
    }, [cameraImage, navigate]);

    const closePreview = () => {
        dispatch(resetCameraImage());
    }
    const sendPost = () => {
        const id = uuid;
        const uploadTask = storage
            .ref(`posts/${id}`)
            .putString(cameraImage, 'data_URL');
        uploadTask.on('state_changed', null, (error) => {
            console.log(error);
        }, () => {
            storage
                .ref('posts')
                .child(id)
                .getDownloadURL()
                .then((url) => {
                    db.collection('posts')
                        .add({
                            imageUrl: url,
                            userName: 'Papa Khan',
                            read: true,
                            timeStamp: firebase.firestore.FieldValue.serverTimestamp
                        });
                    navigate('/chats');
                });

        });
    }
    // const sendPostChat = () => {
    //     navigate('/chats')
    // }
    return (
        <div className="preview">
            <Close
                onClick={closePreview}
                className='close__preview'
            />
            <div className="preview__toolRight">
                <TextFields />
                <Create />
                <MusicNote />
                <Note />
                <AttachFile />
                <Crop />
                <Timer />
            </div>
            <img src={cameraImage} alt="nor shown" />
            <div
                onClick={sendPost}
                className="preview__footer">
                <h2>Send Now</h2>
                <Send fontSize='small' className='send__icon' />
            </div>
        </div>
    )
}

export default Preview