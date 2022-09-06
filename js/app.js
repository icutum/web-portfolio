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