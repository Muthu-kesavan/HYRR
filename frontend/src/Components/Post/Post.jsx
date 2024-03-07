import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Bars } from 'react-loader-spinner';
import "../Loading/Loading.css";
const Post = () => {
  const [explore, setExplore] = useState(null);
  const [isLoading,setIsloading] = useState(false);
  useEffect(()=>{
    const fetchData = async()=>{
      setIsloading(true);

      try{
        const exploreTweets = await axios.get("/posts/post");
        setExplore(exploreTweets.data);

      } catch (err){
        console.log(err);
      } finally {
        setIsloading(false);
      }
    };
    fetchData();
  }, [currentUser._id]);
  return (
    <div className="mt-6">
      {isLoading && (
        <div className="loading-spinner-container">
        <Bars height={80} width={80} color="#5FBDFF" ariaLabel="circles-loading" visible={true} />
      </div>
      )}
      {explore &&
        explore.map((post) => {
          return (
            <div key={post._id} className="p-2">
              <Post post={post} setData={setExplore} />
            </div>
          );
        })}
    </div>
  );
};
  
    

export default Post
