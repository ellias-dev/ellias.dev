//Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    });
});


//MOBILE MENU

//slowly open


    const showItems = (id) => {
        document.getElementById(id).style.display = 'block';
    }

    const closeItems = (id) => {
        document.getElementById(id).style.display = 'none';
    }
    




//CLOSE COLORS

const globalClose = () => {
    const closeItems = (id) => {
        document.getElementById(id).style.display = 'none';
    }
    closeItems('green');
    setTimeout(() => {closeItems('yellow')}, 50);
    setTimeout(() => {closeItems('red')}, 100);
}

//----------



const hbtn = document.querySelector('#hbtn');
const mobMenu = document.querySelector('.mobmenu');
/*
const toggle = () => {
    if(hbtn.classList.contains('open')){
        hbtn.classList.remove('open');
        mobMenu.style.display = "none";

    }
    else {
        hbtn.classList.add('open');
        mobMenu.style.display ='block';

    }
}
*/
//opens and closes menu when clicking on hamburger
hbtn.addEventListener('click', function(){
    if(hbtn.classList.contains('open')){
        hbtn.classList.remove('open');
        mobMenu.style.display = "none";
        closeItems('04');
        setTimeout(() => {closeItems('03')}, 50);
        setTimeout(() => {closeItems('02')}, 100);
        setTimeout(() => {closeItems('01')}, 150);

    }
    else {
        hbtn.classList.add('open');
        mobMenu.style.display ='block';
        showItems('01');
        setTimeout(() => {showItems('02')}, 50);
        setTimeout(() => {showItems('03')}, 100);
        setTimeout(() => {showItems('04')}, 150);
    }
    
});
// Closes mobile menu onclick on item
const toggle = () => {
    hbtn.classList.remove('open');
        mobMenu.style.display = "none";
        closeItems('04');
        setTimeout(() => {closeItems('03')}, 50);
        setTimeout(() => {closeItems('02')}, 100);
        setTimeout(() => {closeItems('01')}, 150);
}


//MODAL WINDOW
const modalOpen = (pic) => {
    const modal = document.getElementById('modal');
    const picture = document.getElementById('picture');
    
    picture.style.content = `url(/resources/pics/myworks/full-size/${pic}.jpg)`;
    modal.style.display = 'block';   
}

const modalClose = () => {
    const modal = document.getElementById('modal');
    const picture = document.getElementById('picture');
    
    //picture.style.content = `url(/resources/pics/myworks/full-size/${pic}.jpg)`;
    modal.style.display = 'none';   
}




const modalToggle = (pic) => {
    const modal = document.getElementById('modal');
    const picture = document.getElementById('picture');

    if(modal.style.display = 'none'){
        picture.style.content = `url(/resources/pics/myworks/full-size/${pic}.jpg)`;
        modal.style.display = 'block';
    } else {
        //picture.style.content = '';
        modal.style.display = 'none';
    }
    
       
}

