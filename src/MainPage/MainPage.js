import React, { useState } from 'react';
import './MainPage.css';
import CardPost from './CardPost';
import Welcome from './Welcome';


function MainPage(props) {

  // let state = props.store.getState().mainPage
  let ListPosts = props.state.ContentPosts.map(post =><CardPost key={post.id}  tags={post.tags} likes={post.likes} comments={post.comments} views={post.views} image={post.imgPost}/>).reverse();
  debugger;
  let newPostBody = props.state.newPostBody;
  // debugger;

  // export let sendPostText = () => {
  //   props.store.dispatch(sendPostCreator());
  // }

  // export let onChangePost = (e) => {
  //   let textPostBody = e.target.value;
  //   props.store.dispatch(updateNewPostBodyCreator(textPostBody));
  // } 
    return (
      <div className='mainContainer'> 
        <Welcome/>
        <div className = 'newPosts'>
            <h3>New</h3>
            <div>
              {ListPosts} 
            </div>
            
        </div>

        <div className = 'followingPosts'>
            <h3>Following</h3>
        </div>

        <div className = 'versePosts'>
            <h3>Verse</h3>

        </div>
        
      </div>
    );
  }
  
  
  export default MainPage;
  
