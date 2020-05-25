import React, { useState } from 'react';
import './MainPage.css';
import CardPost from './CardPost';
import Welcome from './Welcome';
import './CardPost.css';


function MainPage() {

  const state = window.store.getState();
  // let state = props.store.getState().mainPage
  let ListPosts = state.mainPage.ContentPosts.map(post =><CardPost key={post.id}  tags={post.tags} likes={post.likes} comments={post.comments} views={post.views} image={post.imgPost}/>).reverse();
  // debugger;
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
            <div className="">
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

