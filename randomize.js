const button = document.getElementById("No");

button.addEventListener("mouseover", () => {
    button.style.top = Math.round(Math.random()*100)+"%";
    button.style.left = Math.round(Math.random()*100)+"%";
});