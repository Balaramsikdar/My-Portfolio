ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
});
ScrollReveal().reveal(' .home-content, .heading', {origin: 'top' });
ScrollReveal().reveal(' .home-img, .skills-container,.projects-box, .contact form', {origin:'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin:'right'});

var typed = new Typed('#element', {
    strings: ['Java Full Stack Developer', 'Web Developer', 'Application Developer'],
    typeSpeed: 80,
    backspeed:50,
    backDelay:2000,
    loop:true,
});
