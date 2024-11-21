
const imgPlus = './assets/images/icon-plus.svg';
const imgMinus = './assets/images/icon-minus.svg';

const panels = document.querySelector('.accordion-panels');


panels.addEventListener("click", (e) => {

    const panel = e.target.closest('.accordion-panel');
    const content = panel.querySelector('.panel-content');
    const allPanelContents = panels.querySelectorAll('.panel-content');
    const alltitleIcons = panels.querySelectorAll('.title-icon');
    const wasShown = content.classList.contains('shown');

    alltitleIcons.forEach(i => {
        i.setAttribute("src", imgPlus);
    })

    allPanelContents.forEach(c => {
        c.classList.remove('shown');
    })

    const icon = panel.querySelector('.title-icon');
    if (wasShown) {
        content.classList.remove('shown')
        icon.setAttribute("src", imgPlus);
    } else {
        content.classList.add('shown')
        icon.setAttribute("src", imgMinus);
    }
})