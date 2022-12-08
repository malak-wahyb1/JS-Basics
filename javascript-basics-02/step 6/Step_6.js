var images = [ ...document.querySelectorAll("img") ];

images.forEach((img, i) => {
  img.addEventListener('mouseover', function () {
    this.src = "images/image" + (i + 1) + "_2.jpg";
  });
});
images.forEach((img,i) => {
    img.addEventListener('mouseout', function(){
        this.src ="images/image" +(i+1)+".jpg";
    });
});