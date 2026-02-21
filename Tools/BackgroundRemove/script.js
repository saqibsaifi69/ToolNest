const input = document.getElementById("imageInput");

async function removeBackground() {
    const image = input.files[0];

    if (!image) {
        alert("Please select an image first");
        return;
    }

    const formData = new FormData();
    formData.append("image_file", image);
    formData.append("size", "auto");

    try {
        const response = await fetch("https://api.remove.bg/v1.0/removebg", {
            method: "POST",
            headers: {
                "X-Api-Key": "RBSn4mhpctxaRC4sxjvWBMYP"
            },
            body: formData  
        });

        if (!response.ok) {
            alert("Failed to remove background");
            return;
        }

        const blob = await response.blob();
        const imageURL = URL.createObjectURL(blob);

        const resultImage = document.getElementById("resultImage");
        resultImage.src = imageURL;
        resultImage.style.display = "block";

        const downloadBtn = document.getElementById("downloadBtn");
        downloadBtn.href = imageURL;
        downloadBtn.style.display = "block";

    } catch (error) {
        alert("Something went wrong");
        console.log(error);
    }
}
const reset = document.getElementById("refreshbtn");

reset.addEventListener("click",()=>{
    input.value="";
    resultImage.style.display= "none";
    downloadBtn.style.display = "none";
})
// const btnback = document.getElementById("btnback");
// btnback.addEventListener("cick",()=>{
//      window.location.href = "TOOLNEST/index.html";
// })
function goback() {
    window.location.href = "../../main.html#tools";
    // window.location.href = "/ToolNest/index.html";
}