let inputText = document.getElementById("input");
let qrImage = document.getElementById("qr-image");

function QRGenerator(){
   return  qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      inputText.value; 
}