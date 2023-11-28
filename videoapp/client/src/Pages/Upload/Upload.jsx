import React from 'react'
import React, { useEffect, useState } from "react";
import "./Upload.scss";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { set } from 'mongoose';

const Upload = () => {
const [video, setvideo] = useState(undefined);
const [img, setimg] = useState(undefined);
const [imgPers, setImgPers] = useState(0);
const [videoPerc, setVideoPerc] = useState(0);
const [inputs, setInputs] = useState({});
const [tags, setTags] = useState([]);

const handleChange = (e) =>{
    setInputs((prev) => {
        return {...prev, [e.target.name]:e.target.value};
    })
}

const handleTags = (e) =>{
    setTags(e.target.value.split(","));
}

const uploadFile = (file,urlType) =>{
    const storage = getStorage(app);
    const fileName = new Date().getTime()+file.name;
    const storageRef = ref(storage, file);
    const uploadTask = uploadBytesResumable(storageRef, file);


    uploadTask.on(
        "state_changed", (snapshot) =>{
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) *100;

            urlType === "imgUrl" ? setImgPers(Math.round(progress)) : setVideoPerc(Math.round(progress));

            switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  console.log("Upload is running");
                  break;
                default:
                  break;
              }
        },(error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setInputs((prev) => {
              return { ...prev, [urlType]: downloadURL };
            });
          });
        }
    )
}

useEffect(() => {
  video && uploadFile(video, "videoUrl");

  
}, [video])

useEffect(() => {
  img && uploadFile(img, "imgUrl");


}, [img])

const handleUpload = async (e)=>{
    e.preventDefault();
    const res = await axios.post("http://localhost:5030/video/addVideo", {...inputs, tags},{withCredentials: true});
    
    res.status===200 && navigate(`http://localhost:5030/video/find/${res.data._id}`)
  }


const navigate = useNavigate();
    return (
    <div>
        <h2>Upload a new video </h2>

        <div className="input">
            <label htmlFor="video">Video:</label>
            {videoPerc > 0 ? (
          "Uploading:" + videoPerc
        ) : (
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setvideo(e.target.files[0])}
          />
        )}
         <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
        <textarea
          placeholder="Description"
          name="desc"
          rows={8}
          onChange={handleChange}
        />
         <input
          type="text"
          placeholder="Separate the tags with commas."
          onChance={handleTags}
        />

        <div className="input">
            <label htmlFor="img">Img:</label>
            {imgPerc > 0 ? (
          "Uploading:" + imgPers + "%"
        ) : (
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setimg(e.target.files[0])}
          />
        )}
        </div>

        <button onClick={handleUpload} >Upload</button>
        </div>
    </div>
  )
}

export default Upload