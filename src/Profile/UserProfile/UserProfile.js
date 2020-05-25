import React from 'react'
import './UserProfile.css';
import { Button } from 'react-bootstrap';
// import CardPost from '../../MainPage/CardPost';


let DescriptionProfile = [
    {   
        id: 1,
        aboutUser:'     Hello i am Graph Bloom and it`s my profile. You`ll can look at my pictures here below  ', 
        followings:'21', 
        followers:'22',
        publications:'11',
        nickname:'Graph Bloom',
        avatar:'https://i10.kanobu.ru/r/f96b6a023f148873e97cefe70bce157b/1040x-/u.kanobu.ru/editor/images/14/8c14848e-4160-4483-a5c6-c8add8bd7c6e.jpg'
    },
]

function UserProfile(props) {

    return(

    <div className="containerProfile">
        <div className="userProfile">
            
            <div className="contentProfile">
                
                <div className = "containerIconUser">
                    <img className="iconUser" src= {DescriptionProfile[0].avatar} alt="*"/>
                </div>

                <div className="descriptionProfile">
                    
                    <div className="nickname">
                    
                        <h4>
                            {DescriptionProfile[0].nickname}
                        </h4>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cog" className="svg-inline--fa" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg>

                    </div>
                    <div className="statistic">
                        <div className="publications">
                           <p> {DescriptionProfile[0].publications + 'publications'} </p>
                        </div>
                        <div className="followers">
                            <p> {DescriptionProfile[0].followers + 'followers'} </p>
                        </div>
                        <div className="following">
                            <p> {DescriptionProfile[0].followings + 'following'}</p>
                        </div>
                    </div>
                    <div className="aboutUser">
                        <p>
                            {DescriptionProfile[0].aboutUser}  
                        </p>

                    </div>
                    <div className = "buttonsProfile">
                        <div className="messageBtn">
                            <Button variant="outline-primary">Message</Button>{' '}
                        </div>
                        <div className="subscribeBtn">
                            <Button variant="outline-danger">Subscribe</Button>{' '}
                        </div>
                    </div>
                </div>
   
            </div>
     </div>

        
    </div>

    );

}

export default UserProfile;

