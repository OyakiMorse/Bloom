import postsReducer from './PostsReducer';
import dialogsReducer from './DialogsReducer';


let store = {
     _state: {

    },
    _callSubscriber() {
        console.log('State changed');
    },


    getState() {
        return this._state;//до властивостей звертайомся з this
    },
    //Хтось викликає subscribe в () приходить observer, присвоює rerenderEntireTree, відбувається замикання (rerenderEntireTree шукається ззовні функції), зсилається ->
    //-> на функцію яка прийшла в параметри а в параметр прийшла rerenderEntireTree з файла index.js і передаємо ту ф-ю в цей файл
    subscribe(observer) { //викликається коли будуть відбуватися зміни і ререндерить. такий спосіб поміг уникнути циклічної залежності
        this._callSubscriber = observer;//це патерн схожий на publisher-subscriber addEventListener працює по такому ж принципу//якщо створювати змінну, то вона залишається жити в середині функції(ф-я відробила, змінна вмерла )
    },


    dispatch(action) { // action - {type:'ADD-POST'} '' - назва дії, що має зробити dispatch - метод в якому є інші методи// state завджи міняється через dispatch
        this._state.mainPage = postsReducer(this._state.mainPage, action);
        this._state.chatsPage = dialogsReducer(this._state.chatsPage, action);
        this._callSubscriber(this._state);
    }
        // if(action.type === ADD_MSG){
        //     let newMessage = {
        //         id: 8,
        //         message: this._state.chatsPage.newMsgText// створює обєкт з такими полями
        //     };
        //          this._state.chatsPage.MessagesData.push(newMessage);//додає в масив
        //          this._state.chatsPage.newMsgText = '';
        //          this._callSubscriber(this._state);// ререндерить дерево коли викон ф-я
        //      }else if(action.type === UPDATE_NEW_MSG_TEXT) {
        //          this._state.chatsPage.newMsgText = action.newMsg; // з _state - chatsPage в newMsgText присвоємо значення newMsg яке прийшло з onChangeMsg()
        //          this._callSubscriber(this._state);


        //     }else if(action.type === SEND_POST) {
        //          let postBody = {
        //                      id: 8,
        //                      imgPost:'',
        //                      likes: 0,
        //                      comments: 0,
        //                      views: 0,
        //                     tags: this._state.mainPage.newPostBody
        //         }
        //        this._state.mainPage.ContentPosts.push(postBody);//пушить об'єкт
        //         this._state.mainPage.newPostBody = '';// очищає newPostBody, текстаріа
        //         this._callSubscriber(this._state);//ререндерить
        //     }else if(action.type === UPDATE_NEW_POST_BODY) {
        //         this._state.mainPage.newPostBody = action.postBody; // приходить newPostBody з зовні - моадльне вікно
        //         this._state.mainPage.ContentPosts.push(action.postBody); // але прийдеться реверсити список на головній, бо це в кінець закине
        //         this._callSubscriber(this._state);
        //     }



}


export const updatePosts = (postData) => {
    // {id: 1, imgPost:'https://s3.vcdn.biz/static/f/1698004101/image.jpg/pt/r0x284x4', likes:'15', comments:'2', views:'28', tags:'#naruto #orochimaru #sakura #sasuke'},

    const { ContentPosts } = store._state.mainPage;
    ContentPosts.push({
        id: ContentPosts.length + 1,
        imgPost: postData.photo,
        tags: postData.tags,
    });
}
export const dispatch = store.dispatch;

// window.store = store;
export default store;


