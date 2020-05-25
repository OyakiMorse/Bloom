const UPDATE_NEW_MSG_TEXT = 'UPDATE-NEW-MSG-TEXT';
const ADD_MSG = 'ADD_MSG';

let initialState = {
    DialogsData: [
        {id: 1, name: 'Piter Bold', navlink: '/chats/', shortMsg: 'One more time...', timeMsg:'11:04', iconUser: 'https://i4.sndcdn.com/avatars-000277510549-36dbn1-t500x500.jpg'},
        {id: 2, name: 'Piter Nobold', navlink: '/chats/', shortMsg: 'Holy Shit', timeMsg:'10:04', iconUser: 'https://s3.vcdn.biz/static/f/1698004101/image.jpg/pt/r0x284x4'},
        {id: 3, name: 'Piter Boldyara', navlink: '/chats/', shortMsg: 'One  time...', timeMsg:'12:04', iconUser: 'https://i4.sndcdn.com/avatars-000277510549-36dbn1-t500x500.jpg'},
        {id: 4, name: 'Piter Boldyarach', navlink: '/chats/', shortMsg: 'One more ...', timeMsg:'6:04', iconUser: 'https://i4.sndcdn.com/avatars-000277510549-36dbn1-t500x500.jpg'},
        {id: 5, name: 'Piter Boldyarachka', navlink: '/chats/', shortMsg: ' more time...', timeMsg:'4:04', iconUser: 'https://i4.sndcdn.com/avatars-000277510549-36dbn1-t500x500.jpg'},
    ],

    MessagesData:  [
        { id: 1, message: "hello everyone" },
        { id: 2, message: "I am admin of Bloom" },
        { id: 3, message: "Please appriciate this network" },
        { id: 4, message: "hello everyone" },
        { id: 5, message: "I am admin of Bloom" },
        { id: 6, message: "Please appriciate this network" },
    ],

    newMsgText: '',
};
//state = initialState, action оці штуки треба
const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MSG:
            let newMessage = {
                id: 8,
                message: state.newMsgText// створює обєкт з такими полями
            };
            state.MessagesData.push(newMessage);//додає в масив
            state.newMsgText = '';
            return state;
        case UPDATE_NEW_MSG_TEXT:
            state.newMsgText = action.newMsg; // з _state - chatsPage в newMsgText присвоємо значення newMsg яке прийшло з onChangeMsg()
            return state;
        default:
            return state;
    }



}
export const addMsgActionCreator = () => ( { type: ADD_MSG} )
export const updateNewMsgActionCreator = (textMsg) => ( { type: UPDATE_NEW_MSG_TEXT, newMsg: textMsg } )

export default dialogsReducer;
