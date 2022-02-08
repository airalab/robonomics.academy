function smScroll(e) {
    let nav = e.getAttribute("href");

    if(nav){
        document.querySelector(nav).scrollIntoView({ behavior: 'smooth' });
    }
}