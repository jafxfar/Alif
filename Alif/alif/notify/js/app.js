function hasUnread(items){
    const check=(i) =>i.read===false;
    return items.some(check);
}
const posts=[
    {
        id:1,
        read:true,
    },
    {
        id:2,
        read:true,
    },
    {
        id:3,
        read:false,
    },
];
const notify=hasUnread(posts);
console.log(notify);
