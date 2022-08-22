const cursor = document.querySelector(".cursor");

trackMouse();
function trackMouse() {
    addEventListener("mousemove", e => {
        cursor.style.transform = `translate(-50%, -50%) translate(${e.clientX}px, ${e.clientY}px)`;
    });
}

resizeCursor();
function resizeCursor() {
    const links = document.getElementsByTagName("a");
    
    for (let link of links) {
        link.addEventListener("mouseenter", () => {
            cursor.classList.add("cursor--big");
        });

        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("cursor--big");
        });
    }
}

descriptionTyping();
function descriptionTyping() {
    const description = document.querySelector(".hero__description");const descriptions = ["desarrollador web", "procrastinador 24/7"];

    const typeDelay = 175;
    const deleteDelay = 50;

    let descriptionsIndex = 0;
    let charIndex = 0;

    typeText();
    function typeText() {
        if (charIndex < descriptions[descriptionsIndex].length) {
            description.innerHTML += descriptions[descriptionsIndex].charAt(charIndex);

            charIndex++;

            setTimeout(typeText, typeDelay);
        } else {
            setTimeout(deleteText, deleteDelay);
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            description.innerHTML = descriptions[descriptionsIndex].substring(0, charIndex - 1);

            charIndex--;

            setTimeout(deleteText, deleteDelay);
        } else {
            descriptionsIndex++;

            if (descriptionsIndex >= descriptions.length)descriptionsIndex = 0;

            setTimeout(typeText, typeDelay);
        }
    }
}