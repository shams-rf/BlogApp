import React, {useState} from "react";
import {addDoc, collection} from "firebase/firestore";
import {auth, db} from "../firebase-config";
import {useNavigate} from "react-router-dom";


function CreatePost() {
    // Keep track of user input for title and post text
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();

    const CreatePost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            postText,
            author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}
        });
        navigate("/");
    };

    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Create a Post</h1>
                <div className="inputGp">
                    <label>Title:</label>
                    <input type="text" placeholder="Title..." onChange={(event) => {
                        setTitle(event.target.value);
                    }}/>
                </div>
                <div className="inputGp">
                    <label>Post:</label>
                    <textarea placeholder="Post..." onChange={(event) => {
                        setPostText(event.target.value);
                    }}/>
                </div>
                <button onClick={CreatePost}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost;