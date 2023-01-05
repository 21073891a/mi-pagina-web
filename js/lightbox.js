const imagenes = document.getElementsByClassName('.img-galeria')[0]
const imageneslight = document.getElementsByClassName('.agregar-imagen')[0]
const contenedorlight = document.getElementsByClassName('.imagen-light')[0]
console.log(contenedorlight.length)
function aparecerImagen(imagen) {
    imageneslight.src = imagen
    contenedorlight.classList.toggle('show')
    imageneslight.classList.toggle('schowImage')
    hamburguer1.style.opacity = '0'
}
contenedorlight.addEventListener('click', (e)=>{
    if(e.target !== imageneslight){
        contenedorlight.classList.toggle('show')
        imageneslight.classList.toggle('schowImage')
        hamburguer1.style.opacity = '1'
    }
})

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    
    })
})





console.log('me estoy ejecutando')
