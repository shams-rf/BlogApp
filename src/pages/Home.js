import React, {useEffect, useState} from "react";
import {collection, getDocs, deleteDoc, doc} from "firebase/firestore";
import {auth, db} from "../firebase-config";

function Home(isAuth) {
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

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    }

    return (
        <div className="homePage">
            {postsList.map((post) => {
                return (
                    <div className="post">
                        <div className="postHeader">
                            <div className="title">
                                <h3>{post.title}</h3>
                            </div>
                            <div className="deletePost">
                                <button onClick={() => {
                                    deletePost(post.id);
                                }}>&#128465;</button>
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