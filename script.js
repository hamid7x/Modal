'use strict';

const btnOpenModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModel=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnOpenModal.forEach(btn => {
    btn .addEventListener('click',openModal);
});

btnCloseModal.addEventListener('click',closeModel);
overlay.addEventListener('click',closeModel);

document.addEventListener('keydown',function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModel();
    }
});