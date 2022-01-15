let container = document.getElementById('container')
let target = document.getElementById('title')
let citations = document.getElementById('citations')


let options = {
    root: container,
    rootMargin: '0px',
    threshold: 1.0
}

let callback = (entries, observer) => {
    entries.forEach(entry => {
        console.log(entry.isIntersecting ? 'Citation visible' : 'Citation invisible');

        if (entry.isIntersecting) {
            citations.style.opacity = 1
            citations.style.transform = "translateY(0)"
        } else if (!entry.isIntersecting) {
            citations.style.opacity = 0
            citations.style.transform = "translateY(-30px)"
        }
    });
};

let observer = new IntersectionObserver(callback, options);
observer.observe(target);