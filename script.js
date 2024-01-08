
// "http://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=200x200"
const BASE = "http://api.qrserver.com/v1/create-qr-code";

let query;

let qr = document.querySelector(".img-div img");

let btn = document.querySelector(".wrapper button");
let url;

btn.addEventListener("click", async ()=>{

    query = document.querySelector("input").value.trim();

    if(query == ''){
        alert('Input field cannot be empty');
    }else{
        console.log(query);
        url = `${BASE}/?data=${query}&size=200x200`;
        qr.src = url;
    }
})



async function downloadQRCode() {
    
    if(query == ''){
        alert('Please enter a valid input first!')
    }
    else{
        let qrCodeImgSrc = qr.src;

        let response = await fetch(qrCodeImgSrc);
        let blob = await response.blob();
    
        let dataUrl = URL.createObjectURL(blob);

        let downloadLink = document.createElement('a');
        downloadLink.href = dataUrl;
        downloadLink.download = 'qrcode.png';

        
        document.body.appendChild(downloadLink);
        downloadLink.click();

        document.body.removeChild(downloadLink);
    }
}


let dl = document.querySelector(".download");

dl.addEventListener("click", downloadQRCode);


