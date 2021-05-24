
//******nav fixed ******//
const navBar = document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
    if (window.pageYOffset > 59.6 ){
        navBar.classList.add('fixed');
    }
    else{
        navBar.classList.remove('fixed');
    }
})
