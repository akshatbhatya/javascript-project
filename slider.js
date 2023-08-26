const imagesslides=document.querySelectorAll('.slide')
let counter=0;

console.log(imagesslides);
imagesslides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`

})

function slideimage(slide){
    slide.style.transform=`translateX(-(${counter*100}%))`

}