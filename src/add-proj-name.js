import {shared, DOM, projsAndTasks, clickedProjIndex} from "./aggregator.js";

export default function() {
    if (!DOM.modalBoxProjTitle.value) {
        alert("Error: Name field must not be blank. Please provide a project name.");
    } else {
        if (DOM.createProjBtn.innerText === "Create Project" && !checkIfNameExist()) {
            Object.assign(projsAndTasks, {[DOM.modalBoxProjTitle.value]: []});
            createProj(DOM.modalBoxProjTitle.value);
            function createProj(projName) {
                const projNameConvert = projName.toLowerCase().replace(/\W/g, "-");
                const projNameSpan = shared.createElement("span", [projName], {class: "proj-name"});
            
                const taskAmtSpan = shared.createElement("span", [projsAndTasks[projName].length]);
                taskAmtSpan.classList.add("task-amt", `${projNameConvert}-task-amt`);
            
                const editIcon = document.createElement("i");
                editIcon.classList.add("fas", "fa-pen");
                const editBtn = shared.createElement("button", [editIcon], {class: "edit-proj-btn", proj: projNameConvert});
            
                const deleteIcon = document.createElement("i");
                deleteIcon.classList.add("fas", "fa-trash");
                const deleteBtn = shared.createElement("button", [deleteIcon], {class: "trash-proj-btn", proj: projNameConvert});
                
                const projDiv = shared.createElement("div", [projNameSpan, taskAmtSpan, editBtn, deleteBtn], {class: "proj", proj: projNameConvert});
                DOM.projListDiv.append(projDiv);
            
                const projOptEle = shared.createElement("option", [projName], {id: `${projNameConvert}-proj-opt`});
                DOM.projDropDown.append(projOptEle);
            
                closeProjModalBox();
            }
        } else if (DOM.createProjBtn.innerText === "Update Project" && !checkIfNameExist()) {
            const currProjName = DOM.projCards[clickedProjIndex].querySelector(".proj-name").innerText;
            const currprojNameConvert = currProjName.toLowerCase().replace(/\W/g, "-");

            const newProjName = DOM.modalBoxProjTitle.value;
            const newprojNameConvert = newProjName.toLowerCase().replace(/\W/g, "-");

            const projOptEle = shared.createElement("option", [newProjName], {id: `${newprojNameConvert}-proj-opt`});
            DOM.projDropDown.querySelector(`#${currprojNameConvert}-proj-opt`).replaceWith(projOptEle);

            // Replace project name and attributes in the name span, amount span, edit button, and trash button
            DOM.projCards[clickedProjIndex].setAttribute("proj", newprojNameConvert);
            DOM.projCards[clickedProjIndex].querySelector(".proj-name").innerText = newProjName;
            DOM.projCards[clickedProjIndex].querySelector(".task-amt").classList.add(`${newprojNameConvert}-task-amt`);
            DOM.projCards[clickedProjIndex].querySelector(".task-amt").classList.remove(`${currprojNameConvert}-task-amt`);
            DOM.projCards[clickedProjIndex].querySelector(".edit-proj-btn").setAttribute("proj", newprojNameConvert);
            DOM.projCards[clickedProjIndex].querySelector(".trash-proj-btn").setAttribute("proj", newprojNameConvert);

            // Transfer the content of the old project object to the new project object and delete the old project object
            projsAndTasks[newProjName] = projsAndTasks[currProjName];
            delete projsAndTasks[currProjName];

            if (DOM.activePgTitle.innerText === currProjName) {
                DOM.activePgTitle.innerText = newProjName;
            }
            closeProjModalBox();
        }
        
        function checkIfNameExist() {
            for (const prop in projsAndTasks) {
                if (prop.toLowerCase() === DOM.modalBoxProjTitle.value.toLowerCase().trim()) {
                    alert("Error: A project already exist with that name. Please choose a different project name.");
                    return true;
                }
            }
        }

        function closeProjModalBox() {
            DOM.modalBoxProjTitle.value = "";
            DOM.newProjModalBg.style.display = "none";
        }
    }
}