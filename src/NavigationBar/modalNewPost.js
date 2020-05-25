import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import './Modal.css';
import { updatePosts } from '../redux/PostsReducer';


function NewPostModal({ showModal, closeModal }) {

  const [postState, updatePost] = useState({ text: '', photo: null, tags: [] });


  // const {} = window.store.getState();

  const onUploadPhoto = ($event) => {
    const [uploadedFile] = $event.target.files;
    let newImage = {};
    if(uploadedFile) {
      newImage.name = uploadedFile.name
      if(newImage.name.lastIndexOf('.') <= 0) {
        return
      }
      const fr = new FileReader ()
      fr.readAsDataURL(uploadedFile)
      fr.addEventListener('load', () => {
        newImage.url = fr.result;
        newImage.file = uploadedFile;
        updatePost({
          ...postState,
          photo: newImage.url
        });
      })
    } else {
      newImage = {};
    }
  }

  const updateStateFormText = ($event) => {
    updatePost({
        ...postState,
        text: $event.target.value,
      });
  }
  // let postItems =
  const submitModalForm = () => {
    const { text, photo, tags } = postState;
    // validate your form
    if (!text && !photo) return;
    // submit your form
    window.store.dispatch(updatePosts(postState));
    // close modal
    closeModal();
  }

    return (

      <div className="containerModalPost">

        <div className="contentNewPost">
              <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                className="modal-root"
                ariaHideApp={false}
              >

                  <div className="itemsNewPost">
                    <div className="descriptionPostModal">
                        <div className="allDescriptionPost">
                          <div className="headerPost">
                            <p >Create a new post!</p>
                          </div>
                          <div className="descriptionPost">
                            <textarea  placeholder="Type post here..." onChange={updateStateFormText}></textarea>
                          </div>
                        </div>

                        <div className="picturePost">
                          <label htmlFor="file-upload" className="custom-file-upload">
                            <i className="fa fa-cloud-upload"></i>  Upload
                          </label>
                          <input id="file-upload" type="file" accept="image/*" onChange={onUploadPhoto}/> {/*вот в цьому файлі мав би писати код подібний як в чат ось*/}
                        </div>
                    </div>
                    <div className="btnModal">

                      <Button variant="outline-success" onClick={submitModalForm}>Submit</Button>
                      <Button variant="dark" onClick={closeModal}>Close</Button>

                    </div>
                  </div>

              </Modal>
        </div>
      </div>
    );
  }

  export default NewPostModal;
