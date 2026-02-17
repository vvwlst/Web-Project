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

document.addEventListener("DOMContentLoaded", () => {
  const healthBar = document.getElementById("health");
  const healthText = document.getElementById("health-text");

  // Cegah error kalau elemen tidak ada
  if (!healthBar || !healthText) return;

  let health = 100;

  function updateHealth() {
    // simulasi realtime data (acak ringan)
    const randomDrop = Math.floor(Math.random() * 4); // 0–3
    health -= randomDrop;

    if (health <= 0) {
      health = 100; // reset
    }

    // update UI
    healthBar.style.width = health + "%";
    healthText.textContent = health + "%";

    // warna berdasarkan kondisi
    if (health > 60) {
      healthBar.style.background = "lime";
    } else if (health > 30) {
      healthBar.style.background = "orange";
    } else {
      healthBar.style.background = "red";
    }
  }

  // jalankan pertama kali
  updateHealth();

  // realtime tiap 1 detik
  setInterval(updateHealth, 1000);
});
