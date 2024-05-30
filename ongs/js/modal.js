const OpenModalBtn = document.querySelectorAll(".btn-querodoar");
const SaibaMaisBtn = document.querySelectorAll(".btn-saibamais");
const closeModalBtn = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const cadastro = document.querySelector("#btn-cadastrar");


closeModalBtn.addEventListener("click",() => {
    modal.style.display="none";
    fade.style.display="none";
});

cadastro.addEventListener("click",() => {
  modal.style.display="none";
  fade.style.display="none";
  swal.fire({
    icon: "success",
    title: "Boa!",
    text: "Cadastro realizado com sucesso!",
  });
});

cadastro.onclick = function(){
  
};

OpenModalBtn.forEach((btn) =>
  btn.addEventListener('click', (event) => {
    modal.style.display="block";
    fade.style.display="block";
  })

);


SaibaMaisBtn.forEach((btn) =>
  btn.addEventListener('click', (event) => {
    window.location.replace("../Portal-do-Bem/quemsomos.html");
  })
);


