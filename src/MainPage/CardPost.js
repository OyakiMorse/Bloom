import React from 'react';
import './CardPost.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardColumns} from 'react-bootstrap';
import {TiHeartFullOutline} from 'react-icons/ti';
import {FaCommentDots} from 'react-icons/fa';
import {IoIosShareAlt} from 'react-icons/io';
import {IoIosSave} from 'react-icons/io';
import {IoMdEye} from 'react-icons/io';
// функція яка відкриває пост: фул картінка і опис її дістаний з textarea при створені


function CardPost({ post, openPost, postIndex }) {
    return(
    
        <CardColumns>
            <Card className="cardPost" onClick={openPost.bind(post, postIndex)}>
                <Card.Img variant="top" src={post.image} />
                <div className='statusOn'>
                    <IoIosSave size='25px'/>
                    <IoIosShareAlt size='25px' className='iconShare'/>
                </div>
                <div className='statusText'>
                    {post.likes} <TiHeartFullOutline size='20px'/> 
                    {post.comments} <FaCommentDots size='20px' text=''/>
                    {post.views} <IoMdEye size='20px'/>
                </div>
                <Card.Footer>
                    <small className="text-muted">
                        <a href='/qq'>
                            {post.tags}
                        </a>
                    </small>
                </Card.Footer>
            </Card>

        </CardColumns>
    
    );
}

export default CardPost;





