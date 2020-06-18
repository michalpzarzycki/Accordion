
const trigger = document.querySelector(".trigger");
const elem = document.querySelector(".accordion")
const trigger2 = document.querySelectorAll('.trigger2')
const elem2 = document.querySelectorAll('.accordion2')

function showHideAccordion(triggerElem, elem, [...triggers], animationClass='') {
    const displayChanger = elem => elem.style.display === "none" ? elem.style.display = "block" : elem.style.display="none"
    for(let i=0; i<triggers.length; i++) {
         triggerElem.addEventListener(triggers[i], () => displayChanger(elem))
         elem.style.animationDuration = `${i+1}s`
    }
    elem.classList.add(animationClass)
}


showHideAccordion(trigger, elem, ["click", "keypress"], 'accordionAnimation')
for(let i=0; i<trigger2.length; i++) {
    showHideAccordion(trigger2[i], elem2[i], ['click'], 'accordionAnimation')
}
