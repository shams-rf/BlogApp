import React, {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase-config";

function Home() {
    // State to keep track of all posts
    const [postsList, setPostsList] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    // Run when Home component renders
    // Get all documents from posts collection and put them in state
    // Run getPosts method
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostsList(data.docs.map((doc) => ( {...doc.data(), id:doc.id} )))
        };

        getPosts();
    });

    return (
        <div className="homePage">
            {postsList.map((post) => {
                return (
                    <div className="post">
                        <div className="postHeader">
                            <div className="title">
                                <h3>{post.title}</h3>
                            </div>
                        </div>
                        <div className="postTextContainer">{post.postText}</div>
                        <h3>{post.author.name}</h3>
                    </div>
                );
            })}
        </div>
    )
}

export default Home;