import {DOM, displayNavTasks, projsAndTasks, createTask} from "./aggregator.js";

export let clickedProjIndex = null;
export default function(objClicked) {
    const newProjBtn = objClicked.target.closest("#new-proj-btn");
    const projDiv = objClicked.target.closest(".proj");
    const editProjBtn = objClicked.target.closest(".edit-proj-btn");
    const trashProjBtn = objClicked.target.closest(".trash-proj-btn");

    if (newProjBtn) {
        DOM.projModalHeader.innerText = "New Project";
        DOM.createProjBtn.innerText = "Create Project";
        showNewProjModal();
    }

    if (projDiv) {
        DOM.navLinks.forEach(i => {
            i.children[0].classList.remove("active-nav");
        });

        for (let i = 0; i < DOM.projCards.length; i++) {
            DOM.projCards[i].classList.remove("active-proj");
            const projName = DOM.projCards[i].firstElementChild.innerText;
            const projNameConvert = projName.toLowerCase().replace(/\W/g, "-");
            if (projDiv.getAttribute("proj") === projNameConvert) {
                const clickedProjCard = DOM.projCards[i];
                clickedProjCard.classList.add("active-proj");
                DOM.activePgTitle.innerText = projName;
                while (DOM.activePgBody.firstChild) {
                    DOM.activePgBody.firstChild.remove();
                }
                projsAndTasks[projName].forEach(i => createTask(i));
            }
        }
    }

    if (editProjBtn) {
        DOM.projModalHeader.innerText = "Edit Project";
        DOM.createProjBtn.innerText = "Update Project";
        for (let i = 0; i < DOM.projCards.length; i++) {
            const projName = DOM.projCards[i].firstElementChild.innerText;
            const projNameConvert = projName.toLowerCase().replace(/\W/g, "-");
            if (editProjBtn.getAttribute("proj") === projNameConvert) {
                DOM.modalBoxProjTitle.value = projName;
                clickedProjIndex = i;
                showNewProjModal();
            }
        }
    }

    if (trashProjBtn) {
        for (let i = 0; i < DOM.projCards.length; i++) {
            const projName = DOM.projCards[i].firstElementChild.innerText;
            const projNameConvert = projName.toLowerCase().replace(/\W/g, "-");
            if (trashProjBtn.getAttribute("proj") === projNameConvert) {
                const clickedProjCard = DOM.projCards[i];
                const clickedProjName = clickedProjCard.querySelector(".proj-name").innerText;
                projsAndTasks[clickedProjName].forEach(checkIfTaskIsImp);
                DOM.projDropDown.querySelector(`#${projNameConvert}-proj-opt`).remove();
                delete projsAndTasks[clickedProjName];
                clickedProjCard.remove();
                displayNavTasks("projDeleted");
                function checkIfTaskIsImp(currItem) {
                    if (currItem.important) {
                        const tasksProjName = currItem.taskProj;
                        const taskTitle = currItem.task;
                        projsAndTasks.Important.forEach(delTaskFromImpProj);
                        function delTaskFromImpProj(currItem, currItemInd) {
                            if (currItem.taskProj === tasksProjName && currItem.task === taskTitle) {
                                projsAndTasks.Important.splice(currItemInd, 1);
                                document.querySelector(".important-task-amt").innerText = projsAndTasks.Important.length;
                            }
                        }
                    }
                }
            }
        }
    }

    function showNewProjModal() {
        DOM.newProjModalBg.style.display = "block";
    }
}