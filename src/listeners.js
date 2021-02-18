import {
    DOM, closeModal, displayNavTasks, actOnClickedProjEle, addProjName, addTask, actOnClickedTaskEle
} from "./aggregator.js";

export default function() {
    window.addEventListener("click", closeModal);
    window.addEventListener("load", () => displayNavTasks("windowLoaded"));
    DOM.logo.addEventListener("click", () => displayNavTasks("logoClicked"));
    DOM.navLinks.forEach(i => i.addEventListener("click", displayNavTasks));
    DOM.asideEleNode.addEventListener("click", actOnClickedProjEle);
    DOM.createProjBtn.addEventListener("click", addProjName);
    DOM.addTaskBtn.addEventListener("click", addTask);
    DOM.mainEleNode.addEventListener("click", actOnClickedTaskEle);
};