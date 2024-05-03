const colored_text=document.querySelector('.text_color');
const image=document.querySelector('.cat-img');

//text color change
colored_text.addEventListener('mouseover',()=>{
    colored_text.style.color='lightblue';
})

colored_text.addEventListener('mouseout',()=>{
    colored_text.style.color='blue'
})

//image swap
const imagePaths = ['img-1.jpg', 'img-2.jpg', 'img-3.jpg']; 
let currentIndex=0;
 
image.addEventListener('click',()=>{
    currentIndex=(currentIndex+1)%imagePaths.length
    image.style.transform='translateX(-100%)';
    setTimeout(()=>{
        image.src=`./Assets/${imagePaths[currentIndex]}`;
        image.classList.remove('fadeOut');
        image.style.transform='translateX(0)';
    },500)
}
)