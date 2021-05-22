const input = document.getElementById('input')
const btn = document.getElementById('btn')
const ul = document.querySelector('.ul-list')

btn.addEventListener('click' , (e)=>{
      
 const p = input.value 

    addPost(p)

    e.preventDefault()
})



function addPost(add){
  /*
    ul.innerHTML = `<li class = "list-item">${add}</li><button id ="delete">X</button>`
    const dbtn = ul.querySelector('#delete')
  
    dbtn.addEventListener('click', () =>{
        ul.remove()
    })
    */

       const li = document.createElement('li')

      li.innerHTML = `${add} <button id ="delete">X</button>`

      const dbtn = li.querySelector('#delete')

       dbtn.addEventListener('click', () =>{
       li.remove()
  })
      ul.appendChild(li)

/*  
  ul.innerHTML =  `<li>${add}</li><button id ="delete">X</button>`
  
  const dbtn = ul.querySelector('#delete')

  dbtn.addEventListener('click', () =>{
       ul.remove()
  })
  */

}


