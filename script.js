/* TYPING */
const el = document.getElementById("typing");
const text = "I'm SA-MP Player In ";
const clan = "ZxG";

let i = 0;
let del = false;

function typingLoop(){
  if(!del){
    if(i < text.length){
      el.textContent += text[i++];
      setTimeout(typingLoop,80);
    }else{
      el.innerHTML = text + `<span class="red">${clan}</span>`;
      setTimeout(()=>del=true,1200);
      setTimeout(typingLoop,1200);
    }
  }else{
    if(i > 0){
      i--;
      el.textContent = text.substring(0,i);
      setTimeout(typingLoop,40);
    }else{
      del=false;
      el.textContent="";
      setTimeout(typingLoop,500);
    }
  }
}
typingLoop();

/* FADE SCROLL */
const fades = document.querySelectorAll(".fade");
window.addEventListener("scroll",()=>{
  fades.forEach(f=>{
    if(f.getBoundingClientRect().top < window.innerHeight - 100){
      f.classList.add("show");
    }
  });
});
