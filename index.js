const navMenu=document.getElementById('nav_menu');
const navToggle=document.getElementById('nav_toggle');
const navClose=document.getElementById('nav-close');

///show menu//
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

//hide menu//

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}


// ---------------remove menu in mobile----------

const navLink=document.querySelectorAll('.nav__link');

const LinkAction =()=>{
    const navMenu=document.getElementById('nav_menu')

    //when we click on eact nav__link we remove the show menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',LinkAction))




// ---------------add blur header---------------
const blurHeader=()=>{
    const header =document.getElementById('header')

    // when the scroll is greater than 50 viewport height

    this.scrollY>=50? header.classList.add('blur-header')
    :header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)


// ------------------------------scroll bar up----------------------

const scrolUp=()=>{
    const scrolUp=document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport 
    this.scrollY >=350 ? scrolUp.classList.add('show-scroll')
                      : scrolUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrolUp)

// scroll action link

// const sections=document.getElementById('section[id]')

// const scrollActive =()=>{
//     const scrollDown=window.scrollY

//     sections.forEach(current=>{
//         const sectionHeight=current.offsetHeight,
//         sectionTop=current.offsetTop-58,
//         sectionId=current.getAttribute('id'),
//         sectionClass=document.querySelector('.nav__menu a[href*=' +sectionId+ ']')
//         if(scrollDown > sectionTop && scrollDown <= sectionTop+sectionHeight){
//             sectionClass.classList.add('active-link')
//         }
//         else
//         {
//             sectionClass.classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll',scrollActive)
