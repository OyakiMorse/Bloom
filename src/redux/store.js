import postReducer from './PostReducer';
import dialogsReducer from './DialogsReducer';


let store = {
     _state: {


        mainPage:{
            ContentPosts: [ // в тебе мало б бути твій список (масив) коментів і в кожного масиву є поле length, яке видає теперішню довжину масиву (а це уже кількість елементів в ньому), тобто кількість коментів
                {id: 1, imgPost:'https://s3.vcdn.biz/static/f/1698004101/image.jpg/pt/r0x284x4', likes:'15', comments:'2', views:'28', tags:'#naruto #orochimaru #sakura #sasuke'},
                {id: 2, imgPost:'https://www.nihilist.li/wp-content/uploads/2019/06/Naruto_Part_1.png', likes:'25', comments:'21', views:'8', tags:'#naruto #orochimaru #sakura #sasuke'},
                {id: 3, imgPost:'https://i.pinimg.com/originals/2a/df/fb/2adffbee6e939b2bd1e32ffa8c763308.jpg', likes:'1', comments:'2', views:'228', tags:'#naruto #orochimaru #sakura #sasuke'},
                {id: 4, imgPost:'https://animego.org/media/cache/thumbs_250x350/upload/anime/images/5a3fbef2671f5.jpg', likes:'12', comments:'12', views:'28', tags:'#naruto #orochimaru #sakura #sasuke'},
                {id: 5, imgPost:'https://wallpapersmug.com/download/1600x900/654bc4/naruto-sage-boruto-artwork.jpg', likes:'15', comments:'2', views:'28', tags:'#naruto #orochimaru #sakura #sasuke'},
                {id: 6, imgPost:'https://99px.ru/sstorage/53/2019/02/tmb_251721_110545.jpg', likes:'15', comments:'2', views:'28', tags:'#naruto #orochimaru #sakura #sasuke'},
                {id: 7, imgPost:'https://i.pinimg.com/originals/a7/9f/64/a79f6465daa544bda1039a5b19f7d5d4.jpg', likes:'15', comments:'2', views:'28', tags:'#naruto #orochimaru #sakura #sasuke'},
                ],
            newPostBody: ''
        },
        
        chatsPage: {
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
        }
        
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
        this._state.mainPage = postReducer(this._state.mainPage, action);
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

window.store = store;
export default store;


