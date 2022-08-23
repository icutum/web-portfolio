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
    const description = document.querySelector(".hero__description");
    const caret = document.querySelector(".caret");
    const texts = ["desarrollador web", "procrastinador 24/7"];

    const typeDelay = 175;
    const deleteDelay = 50;
    const waitDelay = 2000;

    let textIndex = 0;
    let charIndex = 0;

    typeText();
    function typeText() {
        if (charIndex < texts[textIndex].length) {
            description.innerHTML += texts[textIndex].charAt(charIndex);
            charIndex++;

            setTimeout(typeText, typeDelay);
        } else {
            description.classList.add("hero__description--blink");
            setTimeout(deleteText, deleteDelay + waitDelay);
        }
    }

    function deleteText() {
        if (charIndex === texts[textIndex].length) {
            description.classList.remove("hero__description--blink");
        }
        if (charIndex > 0) {
            description.innerHTML = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;

            setTimeout(deleteText, deleteDelay);
        } else {
            textIndex++;
            if (textIndex >= texts.length) textIndex = 0;

            setTimeout(typeText, typeDelay);
        }
    }
}