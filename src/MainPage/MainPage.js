import React, { useState } from 'react';
import './MainPage.css';
import CardPost from './CardPost';
import Welcome from './Welcome';
import './CardPost.css';
import { Modal, Button} from 'react-bootstrap';
import { SRLWrapper } from "simple-react-lightbox";
import axios from 'axios';


function MainPage() {


  const [modalState, updateModalState] = useState({
    visible: false,
    postIndex: '',
  });

  
  const openPost = async (postIndex) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);






    console.log(121242234);
    updateModalState({
      visible: true,
      postIndex,
    });
  };

  const state = window.store.getState();
  // let state = props.store.getState().mainPage
  let ListPosts = state.mainPage.ContentPosts.map((post, postIndex) => <CardPost key={postIndex} postIndex={postIndex} post={post} openPost={openPost} />).reverse();
  let newListPost = [...ListPosts];


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
            <div className="mainGallery">
              {/* <SRLWrapper images = {newListPost}/> */}
              
              {ListPosts}
                
               
            </div>

        </div>

        <div className = 'followingPosts'>
            <h3>Following</h3>
            <div className="mainGallery">
              {/* <SRLWrapper images = {newListPost}/> */}
              
              {newListPost}
            </div>
        </div>

        <div className = 'versePosts'>
            <h3>Verse</h3>

        </div>

        
        {/* <Modal.Dialog show={modalState.visible}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog> */}


        {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal> */}
      </div>
    );
  }


  export default MainPage;

