const colored_text=document.querySelector('.text_color');
const image=document.querySelector('.cat-img');
const submitBtn=document.querySelector('.submit_btn');
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

//List Element
function addItemsToList(){
    input_elem=document.getElementById('input_field');
    input_data=input_elem.value.trim();
    
    if (input_data=="") return ;
    //create a new list item
    const listItem=document.createElement('li');
    listItem.textContent=input_data;
    listItem.classList.add('items');

    //appending the new list

    const listContainer=document.querySelector('.list-items');
    listContainer.appendChild(listItem);
    
    //clearing the input value
    input_elem.value="";
}
submitBtn.addEventListener('click',addItemsToList);
