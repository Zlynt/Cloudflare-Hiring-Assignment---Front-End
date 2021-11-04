import React, { useState, useEffect } from 'react';

/* Dependencies */
import { toast } from 'react-toastify';

/* Components */
import UserPost from './UserPost';

const PostList = () => {
    const [postList, setPostList] = useState([]);

    const updatePostList = () => {
        let theRequest = new Request('https://socialnetwork.zlynt.workers.dev/posts', {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        });
        fetch(theRequest)
            .then(function (response) {
                return response.json();
            }).then(function (posts) {
                if (posts === undefined || posts === '') {
                    toast.error('Could not get new posts', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    return;
                }

                setPostList(posts.reverse()); //Show new posts first
                console.log(posts);
            }).catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        updatePostList();
        let refreshInterval = setInterval(() => {
            updatePostList();
        }, 5000);

        return () => {
            clearInterval(refreshInterval);
        }
    }, [])

    return (
        <div>
            {postList.map((post, index) => {
                return (
                    <UserPost
                        userName={post.username}
                        userDescription={"Random Poster"}
                        timestamp={post.timestamp}
                        title={post.title}
                        description={post.content}
                        type={post.contentType}
                    />
                );
            })}
        </div>
    );
}

export default PostList;