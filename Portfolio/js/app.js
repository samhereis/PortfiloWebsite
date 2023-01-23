const activeButtonClassNameWithDot = ".active-button";
const activeButtonClassName = " active-button";

const sections = document.querySelectorAll(".section");
const constrollsHolder = document.querySelectorAll(".controlls");
const sectionsButtons = document.querySelectorAll(".control");

const mainContent = document.querySelector(".main-content");

function PageTransitions() {
    sectionsButtons.forEach(element => {
        element.addEventListener('click', () => {
            let currentButton = document.querySelectorAll(activeButtonClassNameWithDot)[0];

            currentButton.className = currentButton.className.replace(activeButtonClassName, '');
            element.className += activeButtonClassName;
        })
    });

    mainContent.addEventListener("click", mainContentElement => {
        const id = mainContentElement.target.dataset.id;

        if (id) {
            sections.forEach(section => {
                section.classList.remove("active");
            });

            const idElement = document.getElementById(id);
            idElement.classList.add("active");
        }
    })
}

PageTransitions();