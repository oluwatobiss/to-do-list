import {DOM} from "./aggregator.js";

export default function(objClicked) {
    if (objClicked.target === DOM.newProjModalBg || objClicked.target === DOM.closeProjModalBtn || objClicked.target === DOM.cancelProjBtn) {
        DOM.modalBoxProjTitle.value = "";
        DOM.newProjModalBg.style.display = "none";
    }
    if (objClicked.target === DOM.newTaskModalBg || objClicked.target === DOM.closeTaskModalBtn || objClicked.target === DOM.cancelTaskBtn) {
        DOM.modalBoxTaskTitle.value = "";
        DOM.modalBoxTaskNote.value = "";
        DOM.modalBoxTaskDate.value = "";
        DOM.modalBoxTaskImportance.checked = false;
        DOM.newTaskModalBg.style.display = "none";
    }
}