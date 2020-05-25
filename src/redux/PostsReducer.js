const UPDATE_NEW_POST_BODY = 'UPDATE-NEW-POST-BODY';
const SEND_POST = 'SEND_POST';
const ADD_POST = 'ADD_POST';

let initialState =  {


    mainPage: {
        newPostBody: ''
    },


    ContentPosts: [
        {id: 1, imgPost:'https://s3.vcdn.biz/static/f/1698004101/image.jpg/pt/r0x284x4', likes:'15', comments:'2', views:'28', tags:'#naruto #orochimaru #sakura #sasuke'},
        {id: 2, imgPost:'https://www.nihilist.li/wp-content/uploads/2019/06/Naruto_Part_1.png', likes:'25', comments:'21', views:'8', tags:'#naruto #orochimaru #sakura #sasuke'},
        {id: 3, imgPost:'https://i.pinimg.com/originals/2a/df/fb/2adffbee6e939b2bd1e32ffa8c763308.jpg', likes:'1', comments:'2', views:'228', tags:'#naruto #orochimaru #sakura #sasuke'},
        {id: 4, imgPost:'https://animego.org/media/cache/thumbs_250x350/upload/anime/images/5a3fbef2671f5.jpg', likes:'12', comments:'12', views:'28', tags:'#naruto #orochimaru #sakura #sasuke'},
        {id: 5, imgPost:'https://wallpapersmug.com/download/1600x900/654bc4/naruto-sage-boruto-artwork.jpg', likes:'15', comments:'2', views:'28', tags:'#naruto #orochimaru #sakura #sasuke'},
        {id: 6, imgPost:'https://99px.ru/sstorage/53/2019/02/tmb_251721_110545.jpg', likes:'15', comments:'2', views:'28', tags:'#naruto #orochimaru #sakura #sasuke'},
        {id: 7, imgPost:'https://i.pinimg.com/originals/a7/9f/64/a79f6465daa544bda1039a5b19f7d5d4.jpg', likes:'15', comments:'2', views:'28', tags:'#naruto #orochimaru #sakura #sasuke'},
    ],
    newPostBody: ''
};

const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_POST:
            let postBody = {
                id: 8,
                imgPost:'',
                likes: 0,
                comments: 0,
                views: 0,
                tags: state.newPostBody
            };
            state.ContentPosts.push(postBody);//пушить об'єкт
            state.newPostBody = '';// очищає newPostBody, текстаріа
            return state;
        case UPDATE_NEW_POST_BODY:
            state.newPostBody = action.postBody; // приходить newPostBody з зовні - моадльне вікно
            state.ContentPosts.push(action.postBody); // але прийдеться реверсити список на головній, бо це в кінець закине
            return state;
        case ADD_POST:
            const postData = {
                id: state.ContentPosts.length + 1,
                imgPost: action.postData.photo,
                tags: action.postData.tags,
            };
            state.ContentPosts.push(postData);
            return state;
        default:
            return state;
    }
}
// export const sendPostCreator = () => ( { type: SEND_POST} ) //повертає тип
// export const updateNewPostBodyCreator = (textPostBody) => ( { type: UPDATE_NEW_POST_BODY, postBody: textPostBody} )



export const updatePosts = (postData) => ({ type: ADD_POST, postData: postData })

export default postsReducer; //
