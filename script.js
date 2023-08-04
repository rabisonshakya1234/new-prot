const ham = document.querySelector('.hamburger')
let active = false;

ham.addEventListener('click', ()=>{
    const menu = document.querySelector('.onPhone nav ul')
    const searchBar = document.querySelector('.isPhone')
    if(active){
        menu.style.top = '-100%'
        searchBar.style.display = 'none'
        active = false;
    }
    else{
        menu.style.top = '60px'
        searchBar.style.display = 'flex'
        active = true;
    }
})



const buttons = document.querySelectorAll('.onPhone nav ul li a')

buttons.forEach(element => {
    element.addEventListener('click', ()=> {
        const menu = document.querySelector('.onPhone nav ul')
        const searchBar = document.querySelector('.isPhone')

        menu.style.top = '-100%'
        searchBar.style.display = 'none'
        active = false;
    })
});