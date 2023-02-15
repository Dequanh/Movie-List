// console.log('Hello World!')
const message= document.querySelector('#message')



function addMovie(e) {
    e.preventDefault()
    let inputField = document.querySelector('input')
    let movie= document.createElement('li')
    let movieTitle = document.createElement('span')
    let deleteBtn = document.createElement('button')
    let list= document.querySelector('ul')


    movieTitle.textContent = inputField.value
    deleteBtn.textContent = 'X'


    movie.appendChild(movieTitle)
    movie.appendChild(deleteBtn)
    list.appendChild(movie)


    list.addEventListener('click', crossOffMovie)
    deleteBtn.addEventListener('click', deleteMovie)


    inputField.value = ' '
}


function deleteMovie(e){
    e.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
}

function crossOffMovie(e) {
    e.target.classList.toggle('checked')
    if( e.target.classList.contains('checked')=== true ){
        message.textContent = 'Movie watched!'
    }else{
        message.textContent= 'Movie added back!'
    }
}


const form= document.querySelector('form')
form.addEventListener('submit', addMovie)