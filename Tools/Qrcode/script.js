let qrimg = document.getElementById("qrimg");
let imgBox = document.getElementById("imgBox");
let input = document.getElementById("input");


function refresh(){
    input.value = "";
}
function genrateqr(){
    try {
        
        if(input.value.length > 0 ){
            qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +input.value;
            imgBox.classList.add("show-img")
        }
        else{
            input.classList.add("error")
            input.classList.add("redborder")
    
            setTimeout(()=>{
                input.classList.remove("error");
                input.classList.remove("redborder");
                
            },1000)
        }
    } catch (error) {
       
       console.log("Something gone Wrong", error.message);
    }

}
function downloadQR() {

    if (!qrimg.src) {  // check karo ke QR generate hua hai ya nahi
        alert("Pehele QR generate karo!");
        return;
    }

    // Canvas me draw karo
    let canvas = document.createElement("canvas");
    canvas.width = qrimg.width;
    canvas.height = qrimg.height;
    let ctx = canvas.getContext("2d");

    let img = new Image();
    img.crossOrigin = "anonymous";  // CORS ke liye
    img.src = qrimg.src;

    img.onload = function() {
        ctx.drawImage(img, 0, 0);
        // Canvas se download
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");  // canvas ko PNG me convert
        link.download = "qr-code.png";
        link.click();
    };

    img.onerror = function() {
        alert("Create QR first");
    };
}


function goback() {
    window.location.href = "../../index.html#tools";
}