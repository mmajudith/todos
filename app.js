'use strict';

const addList = document.querySelector('.add');
const ul = document.querySelector('.todos'); 
const search = document.querySelector('.search input');

const generateTemplate = todos =>{

    const html = ` <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${todos}</span>
                    <i class="far fa-trash-alt delete"></i>
                    </li>`;

    ul.innerHTML += html;
}

// Add Todos

addList.addEventListener('submit', e =>{
   
    e.preventDefault();
    let todo = addList.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        addList.reset();

    }
});

//Delete Todos

ul.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) =>{

    Array.from(ul.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(ul.children)
    .filter((todo) =>  todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
}

// Keyup Event

search.addEventListener('keyup', () =>{

    const term = search.value.trim().toLowerCase();

    filterTodos(term);
})