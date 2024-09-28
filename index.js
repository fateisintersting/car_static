let menubutton = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')


menubutton.onclick = ()=>{
    menubutton.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

window.onscroll = () =>{
    menubutton.classList.remove('bx-x');
    navbar.classList.remove('active')
}


// const sr = scrollReveal({
//     distance:'60px',
//     duration:2500,
//     delay:400,
//     reset:true

// })

// sr.reveal('.text',{delay:200,origin:'top'})

ScrollReveal().reveal('.text');