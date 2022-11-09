
// mainVariables
const navMenu = document.querySelector( '#navMenu' );
const navToggle = document.querySelector( '#navToggle' );
const navClose = document.querySelector( '#navClose' );


// addEvents
navToggle.addEventListener( 'click', () => {
    navMenu.classList.add( 'show-menu' );
});
navClose.addEventListener( 'click', () => {
    navMenu.classList.remove( 'show-menu' );
});


// navLinks
const navLink = document.querySelectorAll( '.nav-link' );
navLink.forEach( l => {
    l.addEventListener( 'click', () => {
        navMenu.classList.remove( 'show-menu' );
    });
});


const scrollHeader = () => {
    const header = document.querySelector( '#header' );
    this.scrollY >= 50
    ? header.classList.add( 'header-gb' )
    : header.classList.remove( 'header-gb' )
}
window.addEventListener( 'scroll', scrollHeader );


// scrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2500
})


// revealAnimations
sr.reveal( `.home-images`, { distance: '120px', delay: 400 } );
sr.reveal( `.home-title`, { delay: 1000 } );
sr.reveal( `.home-title`, { delay: 1000 } );
sr.reveal( `.home-description`, { delay: 1200 } );

if ( window.screen.width > 300 ) {
    sr.reveal( `.home-footer`, { delay: 1400 } );
    sr.reveal( `.home-data div`, { origin: 'right', interval: 100, delay: 1600 } );
    sr.reveal( `.home-button`, { delay: 1800 } );
    sr.reveal( `.home-button-2`, { delay: 1800 } );
}
