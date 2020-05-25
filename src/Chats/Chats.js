import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chats.css'
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {addMsgActionCreator, updateNewMsgActionCreator } from '../redux/DialogsReducer';



// це масив обєктів з двома ключами і двома значеннями

const MessageItem = (props) =>{
    
    return <div className = "oneMessage" ><p className='msgItem'>{props.message}</p></div> 
}
//в цю функцію в пропси приходить масив обєктів, повертаючи рендерить дів з повідомленням


const DialogItem = (props) =>{

    
    return  <div className='dialog'>
    <img src={props.iconUser} alt='*'/>
    <div className='userItem'>
        <div className='userContent'>
            <div>
                <NavLink to={props.navlink + props.id} > {props.name}</NavLink>
            </div>

            <div>
                <p className='editUser'>...</p>
            </div>
        </div>

        <div className='msgContent'>
            <div  className='shortMsg'>
                <p>{props.shortMsg}</p>
            </div>
            <div>
                <p className='timeMsg'>{props.timeMsg}</p>
            </div>
        </div>
    </div>
</div>
}
// ця функція рендерить дів з аватаркою,іменем,силкою, коротким повідомленям юзера та часом відправлення. (Утвориться невеликий блок діалогу )  

//DialogsData -> передаю в пропси, а сам масив перекидаю на рівень вище по компоненті якщо це портібно, далі в головний файл компоненти де також прописуємо props.name_array і в index.js файлі в тегові прописуємо як атрибут 


const Chats = (props) => {

        let addNewMsgRef = React.createRef(); //створює посилання на тег:(textarea)

        let addNewMsg = () => {//функція в якій створюємо нову смс беремо значення і через addMessage свторюємо новий обєкт з ід і смс
            props.dispatch(addMsgActionCreator());
            // props.updateNewMsgText(''); занулення - очищення 
            // addNewMsgRef.current.value = ''; 
            
        }
        let onChangeMsg = () => {// коли текстове поле міняється викликало цю ф-ю
            let textMsg = addNewMsgRef.current.value;
            
            // props.dispatch( { type: 'UPDATE-NEW-MSG-TEXT', newMsg: textMsg } );
            props.dispatch(updateNewMsgActionCreator(textMsg));//це ф-я яка реагує на ввід в текстове поле
            
        }

    let ListDialogs = props.state.DialogsData.map(dialogs => <DialogItem name={dialogs.name} id = {dialogs.id} navlink={dialogs.navlink} shortMsg={dialogs.shortMsg} timeMsg={dialogs.timeMsg} iconUser={dialogs.iconUser}/>);
    // dialogs це змінна яка прийняла в себе весь масив
    let ListMessages = props.state.MessagesData.map(messages =>  <MessageItem message = {messages.message}/>); 
    //перебирає всі елементи в масиві і рендерить компоненти MessageItem 
    return(
        <div className='chatContainer'>
            <div className='dialogsItems'>
                {ListDialogs}
            </div>
            <div className='messages-wrapper'>
                <div className='messages'>
                    <div className='messageSingle'>
                        {ListMessages}
                       

                    </div>
                    
                </div>
                <div className='inputMessage'>
                        <textarea onChange={onChangeMsg} placeholder="Type message..." ref = {addNewMsgRef} value = {props.newMsgText}/>

                       
                        <Button onClick={ addNewMsg } variant="dark"  >
                            Send
                        </Button>  
                    </div>
            </div>
        </div>
    );
}

export default Chats;