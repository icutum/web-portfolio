const cursor = document.querySelector('.cursor');

trackMouse();
function trackMouse() {
    addEventListener("mousemove", e => {
        cursor.style.transform = `translate(-50%, -50%) translate(${e.clientX}px, ${e.clientY}px)`;
    });
}

resizeCursor();
function resizeCursor() {
    const links = document.getElementsByTagName("a");
    
    for (link of links) {
        link.addEventListener("mouseenter", () => {
            cursor.classList.add("cursor--big");
        });

        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("cursor--big");
        });
    }
}