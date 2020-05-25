import React from 'react';
import './CardPost.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardColumns} from 'react-bootstrap';
import {TiHeartFullOutline} from 'react-icons/ti';
import {FaCommentDots} from 'react-icons/fa';
import {IoIosShareAlt} from 'react-icons/io';
import {IoIosSave} from 'react-icons/io';
import {IoMdEye} from 'react-icons/io';


function CardPost(props) {
    return(
        <CardColumns>
            <Card className="cardPost">
                <Card.Img variant="top" src={props.image} />
                <div className='statusOn'>
                    <IoIosSave size='25px'/>
                    <IoIosShareAlt size='25px' className='iconShare'/>
                </div>
                <div className='statusText'>
                    {props.likes} <TiHeartFullOutline size='20px'/> 
                    {props.comments} <FaCommentDots size='20px' text=''/>
                    {props.views} <IoMdEye size='20px'/>
                </div>
                <Card.Footer>
                    <small className="text-muted">
                        <a href='/qq'>
                            {props.tags}
                        </a>
                    </small>
                </Card.Footer>
            </Card>

            
            {/* 
            <Card>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/2a/df/fb/2adffbee6e939b2bd1e32ffa8c763308.jpg" />
                <div className='statusOn'>
                       <IoIosSave size='25px'/>
                       <IoIosShareAlt size='25px' className='iconShare'/>
                    </div>
                    <div className='statusText'>
                       25   <TiHeartFullOutline size='20px'/>    2  <FaCommentDots size='20px' text=''/>    134   <IoMdEye size='20px'/>
                    </div>
                <Card.Footer>
                <small className="text-muted"><a href='/qq'>#naruto #sex #orochimaruPidor #sakuraPizdyakura</a></small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://animego.org/media/cache/thumbs_250x350/upload/anime/images/5a3fbef2671f5.jpg" />
                <div className='statusOn'>
                       <IoIosSave size='25px'/>
                       <IoIosShareAlt size='25px' className='iconShare'/>
                    </div>
                    <div className='statusText'>
                       25   <TiHeartFullOutline size='20px'/>    2  <FaCommentDots size='20px' text=''/>    134   <IoMdEye size='20px'/>
                    </div>
                <Card.Footer>
                <small className="text-muted"><a href='/qq'>#naruto #sex #orochimaruPidor #sakuraPizdyakura</a></small>
                </Card.Footer>
            </Card>

            <Card >
            <Card.Img variant="top" src="https://wallpapersmug.com/download/1600x900/654bc4/naruto-sage-boruto-artwork.jpg" />
            <div className='statusOn'>
                       <IoIosSave size='25px'/>
                       <IoIosShareAlt size='25px' className='iconShare'/>
                    </div>
                    <div className='statusText'>
                       25   <TiHeartFullOutline size='20px'/>    2  <FaCommentDots size='20px' text=''/>    134   <IoMdEye size='20px'/>
                    </div>
                <Card.Footer>
                    <small className="text-muted"><a href='/qq'>#naruto #sex #orochimaruPidor #sakuraPizdyakura</a></small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://99px.ru/sstorage/53/2019/02/tmb_251721_110545.jpg" />
                <div className='statusOn'>
                       <IoIosSave size='25px'/>
                       <IoIosShareAlt size='25px' className='iconShare'/>
                    </div>
                    <div className='statusText'>
                       25   <TiHeartFullOutline size='20px'/>    2  <FaCommentDots size='20px' text=''/>    134   <IoMdEye size='20px'/>
                    </div>
                <Card.Footer>
                <small className="text-muted"><a href='/qq'>#naruto #sex #orochimaruPidor #sakuraPizdyakura</a></small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/a7/9f/64/a79f6465daa544bda1039a5b19f7d5d4.jpg" />
                <div className='statusOn'>
                       <IoIosSave size='25px'/>
                       <IoIosShareAlt size='25px' className='iconShare'/>
                    </div>
                    <div className='statusText'>
                       25   <TiHeartFullOutline size='20px'/>    2  <FaCommentDots size='20px' text=''/>    134   <IoMdEye size='20px'/>
                    </div>
                <Card.Footer>
                <small className="text-muted"> <a href='/qq'>#naruto #sex  #sakuraPizdyakura</a></small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://image.kinokrad.co/p/f/1453305047_naruto-uragannye-hroniki-11-sezon.jpeg" />
                <div className='statusOn'>
                       <IoIosSave size='25px'/>
                       <IoIosShareAlt size='25px' className='iconShare'/>
                    </div>
                    <div className='statusText'>
                       25   <TiHeartFullOutline size='20px'/>    2  <FaCommentDots size='20px' text=''/>    134   <IoMdEye size='20px'/>
                    </div>
                <Card.Footer>
                <small className="text-muted"><a href='/qq'>#naruto #sex  #sakuraPizdyakura</a></small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://wallpaperscave.ru/images/original/18/02-21/anime-naruto-19895.jpg" />
                <div className='statusOn'>
                       <IoIosSave size='25px'/>
                       <IoIosShareAlt size='25px' className='iconShare'/>
                    </div>
                    <div className='statusText'>
                       25   <TiHeartFullOutline size='20px'/>    2  <FaCommentDots size='20px' text=''/>    134   <IoMdEye size='20px'/>
                    </div>
                <Card.Footer>
                <small className="text-muted"><a href='/qq'>#naruto #sex #orochimaruPidor</a> </small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://cdn-portal-static.101xp.com/portal_ru/upload/1565184532_php38tetV.jpg" />
                <div className='statusOn'>
                       <IoIosSave size='25px'/>
                       <IoIosShareAlt size='25px' className='iconShare'/>
                    </div>
                    <div className='statusText'>
                       25   <TiHeartFullOutline size='20px'/>    2  <FaCommentDots size='20px' text=''/>    134   <IoMdEye size='20px'/>
                    </div>
                <Card.Footer>
                <small className="text-muted"><a href='/qq'>#naruto #sex #orochimaruPidor #sakuraPizdyakura</a></small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://wallpaperscave.ru/images/original/18/02-21/anime-naruto-19895.jpg" />
                <div className='statusOn'>
                       <IoIosSave size='25px'/>
                       <IoIosShareAlt size='25px' className='iconShare'/>
                    </div>
                    <div className='statusText'>
                       25   <TiHeartFullOutline size='20px'/>    2  <FaCommentDots size='20px' text=''/>    134   <IoMdEye size='20px'/>
                    </div>
                <Card.Footer>
                <small className="text-muted"><a href='/qq'>#naruto #sex #orochimaruPidor #sakuraPizdyakura</a></small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://u.kanobu.ru/editor/images/26/516d3b23-9f43-49a0-af30-a53fd9720512.jpg" />
                <div className='statusOn'>
                       <IoIosSave size='25px'/>
                       <IoIosShareAlt size='25px' className='iconShare'/>
                    </div>
                    <div className='statusText'>
                       25   <TiHeartFullOutline size='20px'/>    2  <FaCommentDots size='20px' text=''/>    134   <IoMdEye size='20px'/>
                    </div> 
                <Card.Footer>
                <small className="text-muted"><a href='/qq'><a href='/qq'>#naruto #sex #orochimaruPidor #sakuraPizdyakura</a></a></small>
                </Card.Footer>
            </Card>

            <Card>
                    
                        
                   
                <Card.Img variant="top" src="https://www.meme-arsenal.com/memes/56d87bb7908f0bbc726c2cef909d51f0.jpg" />
                    <div className='statusOn'>
                       <IoIosSave size='25px'/>
                       <IoIosShareAlt size='25px' className='iconShare'/>
                    </div>
                    <div className='statusText'>
                       25   <TiHeartFullOutline size='20px'/>    2  <FaCommentDots size='20px' text=''/>    134   <IoMdEye size='20px'/>
                    </div>
                
                <Card.Footer>
                <small className="text-muted"><a href='/qq'><a href='/qq'>#naruto #sex #orochimaruPidor #sakuraPizdyakura</a></a></small>
                </Card.Footer>
            </Card>
             */}
        </CardColumns>
    );
}

export default CardPost;





