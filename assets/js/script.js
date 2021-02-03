const appButtonAddSecao = document.querySelector('.app_add_secao .app_button_add_secao');
const appContainerAddSecao = document.querySelector('.app_add_secao .app_container_add_secao');
appButtonAddSecao.addEventListener('click', function(){
    appContainerAddSecao.classList.toggle('hidden');
})