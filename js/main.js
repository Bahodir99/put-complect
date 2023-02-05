let elFrom = document.querySelector('.form')
let elFrom1 = document.querySelector('.form1')
let elFrom2 = document.querySelector('.form2')
let elList = document.querySelector('list')


elFrom.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    let elVal = e.target.elements


    fetch('https://63dcabf6367aa5a7a4ffc848.mockapi.io/test',{
        method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userId:elVal.userId.value,title:elVal.title.value,body:elVal.body.value})
    })
    .then((res)=> res.json())
    .then((data)=> console.log(data))
})

elFrom2.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    let elVal = e.target.elements
    let id= e.target.elements.id.value


    fetch(`https://63dcabf6367aa5a7a4ffc848.mockapi.io/test/${id}`,{
        method : 'PUT',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userId:elVal.userId.value,title:elVal.title.value,body:elVal.body.value})
    })
    .then((res)=> res.json())
    .then((data)=> console.log(data))
    
})




elFrom1.addEventListener('submit', (e)=>{
    e.preventDefault()

    let elVal = e.target.elements.id.value
    
    fetch(`https://63dcabf6367aa5a7a4ffc848.mockapi.io/test/${elVal}`,{
        method : 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    })
    .then((res)=> res.json())
    .then((data)=>console.log(data))


}) 





fetch('https://63dcabf6367aa5a7a4ffc848.mockapi.io/test')
.then((res)=> res.json())
.then((data)=>{

    let elLi = document.createElement('li')
    elLi.innerHTML =`
    <div class="card">
    <b>UserId:${data.userId} </b>
    <b>Title:${data.title} </b>
    <b>Body: ${data.body}</b>
    </div>`    
    elList.appendChild(elLi)

})




const dataBase = data


console.log(dataBase);


dataBase.forEach((e)=>{
  
})








