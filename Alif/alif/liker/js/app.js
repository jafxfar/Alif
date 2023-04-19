'use strikt';
const post={
    id:1,
    title: 'JS is fuck',
    img:{
        url:'img/logo_js.svg',
        alt: 'Js logo'
    },
    likes:0,
};

const postEI=document.querySelector('[data-type="post"]');
const imgEI=postEI.querySelector('[data-id="image"]');
const likesEI=postEI.querySelector('[data-id="likes"]');
const likeEI=postEI.querySelector('[data-id="like"]');
const dislikeEI=postEI.querySelector('[data-id="dislike"]');

const postWidget={
    rootEI:postEI,
    imgEI:imgEI,
    likesEI:likesEI,
    likeEI:likeEI,
    dislikeEI:dislikeEI,
};

postWidget.likeEI.onclick=evt=>{
   console.log('like clicked');
    console.log(evt);
};
postWidget.dislikeEI.onclick=evt=>{
    console.log('dislike clicked');
    console.log(evt);
};
function bindPostToEI(post, el){
    el.imgEI.src=psot.img.url;
    el.imgEI.alt=post.img.alt;
    el.likesEI.textContent=post.likes;
}
bindPostToEI(post, postWidget);
