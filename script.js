// var name = "hat";
// function change(imgName){
//  /*var image = document.getElementById('image1');
//  if(image_tracker==document.getElementById('image1')){
//  image.src="images/hat.png";
//  image_tracker=document.getElementById('image1');
//  }
//  else{
//  image.src="images/mirror-sunglasses.png";
//  image_tracker=document.getElementById('image2');
//  }*/
   
//   var img = document.getElementById('image1');
//   img.src = imgName;
//   if (img.src.match("images/mirror-sunglasses.png")){
//     document.img.src = "images/mirror-sunglasses.png";
//     name = "sunnies";
//   }
//   else {
//     document.img.src = "images/hat.png";
//     name = "hat";
//   }
  
  

//  /*if(img.src.match()) img.src = "images/mirror-sunglasses.png";
//    else img.src = "images/hat.png";

//   document.image.src = img.src;*/
//  }
var image= null;
			function init(){
				image=document.getElementById("image");				
				image.style.position='relative';
				image.style.left='0px';
				image.style.top='0px';
			}
			document.onkeydown =function(event){
				switch(event.keyCode){
				case 37:
				moveLeft();
				break;
				case 38:
				moveUp()
				break;
				case 39:
				moveRight()
				break;
				case 40:
				moveDown()
                break;
         }	
		}
			function moveLeft(){
				image.style.left=parseInt(image.style.left)-5 +'px';
			}
			function moveUp(){
				image.style.top=parseInt(image.style.top)-5 +'px';
			}
			function moveRight(){
				image.style.left=parseInt(image.style.left)+5 +'px';
			}
			function moveDown(){
				image.style.top=parseInt(image.style.top)+5 +'px';
			}

      var video = document.querySelector("#videoElement");



 function swapImage(id,primary,secondary) {
    src=document.getElementById(id).src;
    if (src.match(primary)) {
      document.getElementById(id).src=secondary;
    } else {
      document.getElementById(id).src=primary;
    }
  }   
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
  }
			window.onload=init;
      // let image = document.getElementById('image');
      function ZoomIn() {
     let width = image.clientWidth;
     let height = image.clientHeight;
     image.style.width = (width + 50) + "px";
     image.style.height = (height + 50) + "px";
  }
  function ZoomOut() {
     let width = image.clientWidth;
     let height = image.clientHeight;
     image.style.width = (width - 50) + "px";
     image.style.height = (height - 50) + "px";
  }
