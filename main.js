const checking = () => {
    if (window.scrollY >= 1000) {
        let object = document.querySelector('.ampule');
        
        object.style.animationPlayState = 'running';
		object.classList.add('change');
    }
};

window.setInterval('checking()', 1);