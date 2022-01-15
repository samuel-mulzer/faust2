let container = document.getElementById('container')
let target = document.getElementById('citations')

let options = {
    root: container,
    rootMargin: '0px',
    threshold: 1.0
}

let callback = (entries, observer) => {
    entries.forEach(entry => {
        console.log(entry.isIntersecting ? 'Citation visible' : 'Citation invisible');

        if (entry.isIntersecting) {
            entry.target.style.opacity = 1
            entry.target.style.transform = "translateY(0)"

            observer.disconnect()
        }
    });
};

let observer = new IntersectionObserver(callback, options);
observer.observe(target);