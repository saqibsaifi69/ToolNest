const logo = document.getElementById("logo");

logo.addEventListener("click",()=>{
    window.location.href = "./main.html#home"
})

// Tools JS

const circles = document.querySelectorAll(".skill");

circles.forEach(skill => {
    const percent = skill.dataset.percent;
    const circle = skill.querySelector("circle");

    const circumference = 550;
    const offset = circumference - (percent / 100) * circumference;

    setTimeout(() => {
        circle.style.strokeDashoffset = offset;
    }, 200);
});

function openTool(toolFile) {
    window.location.href = toolFile;
}


const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  toggleBtn.textContent = body.classList.contains("dark")
    ? "☀︎"
    : "☾";
});
