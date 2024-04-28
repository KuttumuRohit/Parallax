let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    // Adjust the parallax effect based on scroll position
    let parallaxValue = value * 0.5; // Adjust the multiplier for desired effect
    
    // Update the position of elements with parallax effect
    text.style.marginTop = parallaxValue * 2.5 + 'px';
    leaf.style.top = parallaxValue * -1.5 + 'px';
    leaf.style.left = parallaxValue * 1.5 + 'px';
    hill5.style.left = parallaxValue * 1.5 + 'px';
    hill4.style.left = parallaxValue * -1.5 + 'px';
    hill1.style.top = parallaxValue * 1.5 + 'px';
});
