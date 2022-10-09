ScrollReveal().reveal(".main__section", {delay: 250});

mouseEvents();
function mouseEvents() {
    const cursor = document.querySelector(".cursor");
    const links = document.getElementsByTagName("a");

    /* Tracks the cursor div to the mouse position */
    addEventListener("mousemove", e => {
        cursor.style.transform = `translate(-50%, -50%) translate(${e.clientX}px, ${e.clientY}px)`;
    });
    
    /* Resizes the cursor div when hovering on a link */
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
    const texts = ["desarrollador web", "web developer", "ウェブ開発者"];

    const TYPE_DELAY = 200;
    const DELETE_DELAY = 50;
    const WAIT_DELAY = 2000;

    let textIndex = 0;
    let charIndex = 0;

    typeText();
    function typeText() {
        if (charIndex < texts[textIndex].length) {
            description.innerHTML += texts[textIndex].charAt(charIndex);
            charIndex++;

            setTimeout(typeText, TYPE_DELAY);
        } else {
            description.classList.add("hero__description--blink");
            setTimeout(deleteText, DELETE_DELAY + WAIT_DELAY);
        }
    }

    function deleteText() {
        if (charIndex === texts[textIndex].length) {
            description.classList.remove("hero__description--blink");
        }
        if (charIndex > 0) {
            description.innerHTML = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;

            setTimeout(deleteText, DELETE_DELAY);
        } else {
            textIndex++;
            if (textIndex >= texts.length) textIndex = 0;

            setTimeout(typeText, TYPE_DELAY);
        }
    }
}

calculateAge();
function calculateAge() {
    const text = document.querySelector(".age");

    const birthday = new Date(2002, 3, 27);

    let age = new Date(Date.now() - birthday.getTime());
    text.innerHTML = Math.abs(age.getUTCFullYear() - 1970);
}

rotatingText();
function rotatingText() {
    const text = document.querySelector(".rotating-circle__text");
    let degrees = 360 / text.innerHTML.length - 0.5;

    text.innerHTML = text.innerText.split("").map(
        (letter, i) => {
            return `<span class="rotating-circle__letter" style="transform: rotate(${degrees * i}deg);">${letter}</span>`;
        }
    ).join("");
}