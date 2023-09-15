import React, { useEffect } from 'react';
import { useState } from 'react';
import './feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
import { db } from '../../firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser);

    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');
    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => (
                setPosts(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            ))

    }, [])
    const sendPost = (e) => {
        e.preventDefault();
        db
            .collection('posts')
            .add({
                name: user.displayName,
                description: user.email,
                message: input,
                photoUrl: user.photoUrl || '',
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
        setInput('');


    };
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            type="text" />
                        <button
                            onClick={sendPost}
                            type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={VideoChatIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={ArticleIcon} title="Write article" color="#7FC15E" />

                </div>
            </div>
            {/* Posts */}
            {/* We are using this flipmove for animation of posts */}
            <FlipMove>
                {posts.map(({ id, data: { name, description, photoUrl, message } }) =>
                (<Post
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                    key={id}

                />
                ))}
            </FlipMove>

        </div>

    )
}

export default Feed