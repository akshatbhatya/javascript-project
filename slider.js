const imagesslides = document.querySelectorAll('.slide');
console.log(imagesslides.length);

const previousbtn = document.querySelector('.prev');
const nextbtn = document.querySelector('.next')
var counter = 0;

console.log(imagesslides);
imagesslides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`

})





nextbtn.addEventListener('click', () => {
    counter++
    if(counter==imagesslides.length){
        console.log(counter,"inner counter");
        counter=0;
    }
    console.log(counter);
    slideimage()
})

previousbtn.addEventListener('click', () => {
    counter--;
    if (counter==-1){
        console.log(counter,"inner counter");
        counter=imagesslides.length-1;
        
    }
    console.log(counter);
    slideimage()
})

function slideimage() {
    imagesslides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}