let situacao = confirm("Para acessar o sistema - Pressione OK");

if(situacao) {
  // redirecionar o usuário para a página de acesso Permitido
   window.location.href="acessoPermitido.html";
} else {
    window.location.href="acessoNegado.html";
}