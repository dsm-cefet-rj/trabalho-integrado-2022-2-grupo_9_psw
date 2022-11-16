const form = document.querySelector("form"),
button=form.querySelector(".button"),
allInput = form.querySelectorAll(".details input");
topnav=document.querySelector(".topnav");



button.addEventListener("click", ()=> {
allInput.forEach(input => {
if(input.value != ""){
    form.classList.add('secActive');
}else{
    form.classList.remove('secActive');

}
})
})

button.addEventListener("click", () => form.classList.remove('secActive'));




