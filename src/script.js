const leftArrow = document.getElementById('left-arrow');
leftArrow.onclick = function () {arrowHandler(), prevPic()};

const rightArrow = document.getElementById('right-arrow');
rightArrow.onclick = function () {arrowHandler(), nextPic()};

const photoNum = document.getElementById('pic-num-span');
const totalPhotos = document.getElementById('total-pic-num-span');
const images = document.getElementsByClassName('pic');
const picSelector = document.querySelectorAll('.dot');

let picIndex = 0;

for (let i = 0; i < picSelector.length; i++) {
  picSelector[i].addEventListener('click', function() {
    for (let j = 0; j < images.length; j++){
      if(images[j].attributes.num.value == this.id){
        images[this.id].attributes.state.value = 'active';
        images[this.id].style.opacity = 1;
        picSelector[this.id].style.background = '#01baef'
        picIndex = j;
      }
      if(images[j].attributes.num.value != this.id){
        images[j].attributes.state.value = 'hidden';
        images[j].style.opacity = 0;
        picSelector[j].style.background = '#01baef80'
      }
    }
    arrowHandler();
    numberHandler();
  });
}

changeBack = () => {
  document.body.style.backgroundImage = `url(./assets/img/img${picIndex+1}.jpg)`;
}

prevPic = () => {
  for(let i = 0; i < images.length; i++) {
    if(images[picIndex].attributes.state.value === 'active'){
      images[picIndex-1].attributes.state.value = 'active';
      images[picIndex-1].style.opacity = 1;
      images[picIndex].attributes.state.value = 'hidden';
      images[picIndex].style.opacity = 0;
      picSelector[picIndex-1].style.background = '#01baef'
      picSelector[picIndex].style.background = '#01baef80'
    }
  }
  picIndex--;
}

nextPic = () => {
  for(let i = 0; i < (images.length+1); i++) {
    if(images[picIndex].attributes.state.value === 'active'){
      images[picIndex+1].attributes.state.value = 'active';
      images[picIndex+1].style.opacity = 1;
      images[picIndex].attributes.state.value = 'hidden';
      images[picIndex].style.opacity = 0;
      picSelector[picIndex+1].style.background = '#01baef'
      picSelector[picIndex].style.background = '#01baef80'
    }
  }
  picIndex++;
}

arrowHandler = () => {
  if(picIndex == 0){
    leftArrow.attributes.disabled.value = true;
    rightArrow.attributes.disabled.value = false;
    picSelector[0].style.background = '#01baef'
  }
  if(picIndex > 0){
    leftArrow.attributes.disabled.value = false;
    rightArrow.attributes.disabled.value = false;
  }
  if(picIndex == images.length-1){
    rightArrow.attributes.disabled.value = true;
  }

}

numberHandler = () => {
  photoNum.textContent = picIndex+1;
  totalPhotos.textContent = images.length;
}


document.onclick = function () {arrowHandler(), numberHandler(), changeBack(), console.log(picIndex, (images.length-1))};
document.addEventListener('DOMContentLoaded', function (e) {
  arrowHandler();
  numberHandler();
});
