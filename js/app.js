trackMouse();
function trackMouse() {
    const cursor = document.querySelector('.cursor');

    addEventListener("mousemove", e => {
        cursor.style.transform = `translate(-50%, -50%) translate(${e.clientX}px, ${e.clientY}px)`;
    });
}