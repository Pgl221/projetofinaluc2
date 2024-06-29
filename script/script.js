const form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const nome=document.querySelector('#nome').value
    console.log(nome)
})