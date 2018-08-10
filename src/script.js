const leftArrow = document.getElementById('left-arrow');
leftArrow.onclick = function () {prevPic()};

const rightArrow = document.getElementById('right-arrow');
rightArrow.onclick = function () {nextPic()};

const picSelector = document.querySelectorAll('.dot');
for (let i = 0; i < picSelector.length; i++) {
  picSelector[i].addEventListener('click', function() {
    for (let j = 0; j < images.length; j++){
      if(images[j].attributes.num.value == this.id){
        images[this.id].attributes.state.value = 'active';
        images[this.id].style.display = 'block';
        picSelector[this.id].style.background = '#01baef'
        picIndex = j;
      }
      if(images[j].attributes.num.value != this.id){
        images[j].attributes.state.value = 'hidden';
        images[j].style.display = 'none';
        picSelector[j].style.background = '#01baef80'
      }
    }
    arrowHandler();
    numberHandler();
  });
}

// const container = document.getElementsByClassName('container')
changeBack = () => {
  document.body.style.backgroundImage = `url(../assets/img/img${picIndex+1}.jpg)`;

}


const photoNum = document.getElementById('pic-num-span');
const totalPhotos = document.getElementById('total-pic-num-span');

let picIndex = 0;

const images = document.getElementsByClassName('pic');

document.onclick = function () {arrowHandler(), numberHandler(), changeBack()};

prevPic = () => {
  for(let i = 0; i < images.length; i++) {
    if(images[picIndex].attributes.state.value === 'active'){
      images[picIndex-1].attributes.state.value = 'active';
      images[picIndex-1].style.display = 'block';
      images[picIndex].attributes.state.value = 'hidden';
      images[picIndex].style.display = 'none';
      picSelector[picIndex-1].style.background = '#01baef'
      picSelector[picIndex].style.background = '#01baef80'
    }
  }
  picIndex--;
}

nextPic = () => {
  for(let i = 0; i < images.length; i++) {
    if(images[picIndex].attributes.state.value === 'active'){
      images[picIndex+1].attributes.state.value = 'active';
      images[picIndex+1].style.display = 'block';
      images[picIndex].attributes.state.value = 'hidden';
      images[picIndex].style.display = 'none';
      picSelector[picIndex+1].style.background = '#01baef'
      picSelector[picIndex].style.background = '#01baef80'
    }
  }
  picIndex++;
}

arrowHandler = () => {
  if(picIndex == 0){
    leftArrow.style.display = 'none';
    rightArrow.style.display = 'block';
    picSelector[0].style.background = '#01baef'
  }
  if(picIndex > 0){
    leftArrow.style.display = 'block';
    rightArrow.style.display = 'block';
  }
  if(picIndex == images.length-1){
    rightArrow.style.display = 'none';
  }
}

numberHandler = () => {
  photoNum.textContent = picIndex+1;
  totalPhotos.textContent = images.length;
}

document.addEventListener('DOMContentLoaded', function (e) {
  arrowHandler();
  numberHandler();
});
