import {shared, header, aside, mainEle, newProjModal, newTaskModal} from "./aggregator.js";

const contentDiv = document.getElementById("content");
contentDiv.append(header, aside, mainEle, newProjModal, newTaskModal);

const navLinks = Array.from(document.querySelector("#nav-links").children);
const asideEleNode = document.getElementById("aside-ele");
const projListDiv = document.getElementById("proj-list");
const projListDivProjCards = projListDiv.children;
const mainEleNode = document.getElementById("main-ele");
const activePgTitle = document.getElementById("active-page-title");
const activePgBody = document.getElementById("active-page-body");

const newProjModalBg = document.getElementById("new-proj-modal-bg");
const closeProjModalBtn = document.getElementById("close-proj-modal");
const modalBoxProjTitle = document.getElementById("proj-title");
const cancelProjBtn = document.getElementById("cancel-proj-btn");
const createProjBtn = document.getElementById("create-proj-btn");

const newTaskModalBg = document.getElementById("new-task-modal-bg");
const closeTaskModalBtn = document.getElementById("close-task-modal");
const modalBoxTaskTitle = document.getElementById("task-title");
const modalBoxTaskNote = document.getElementById("task-note");
const modalBoxTaskDate = document.getElementById("task-date");
const modalBoxTaskImportance = document.getElementById("task-importance");
const projDropDown = document.getElementById("proj-dropdown");
const cancelTaskBtn = document.getElementById("cancel-task-btn");
const addTaskBtn = document.getElementById("add-task-btn");

const projsAndTasks = {
    Important: [], 
    Random: []
};

let clickedProjCardIndex = null;
let clickedTaskCardIndex = null;

window.addEventListener("load", displayTodayTasks);
window.addEventListener("click", closeModal);
navLinks.forEach(i => i.addEventListener("click", displayNavName));
createProjBtn.addEventListener("click", addProjName);
addTaskBtn.addEventListener("click", addTask);
mainEleNode.addEventListener("click", actOnTaskEle);
asideEleNode.addEventListener("click", actOnProjEle);

for (const prop in projsAndTasks) {
    if (prop === "Important" || prop === "Random") {
        const projNameSpan = shared.createElement("span", [prop], {class: "proj-name"});
        const taskAmtSpan = shared.createElement("span", [projsAndTasks[prop].length]);
        const projNameText = prop.toLowerCase().replace(/\W/g, "-");
        taskAmtSpan.classList.add("task-amt", `${projNameText}-task-amt`);
        const projDiv = shared.createElement("div", [projNameSpan, taskAmtSpan], {class: "proj"});
        projDiv.addEventListener("click", displayProj);
        projListDiv.append(projDiv);
        if (prop !== "Important") {
            const projOptEle = shared.createElement("option", [prop]);
            projDropDown.append(projOptEle);
        }
    }
}

function displayTodayTasks() {
    activePgTitle.innerText = "Today";
}

function displayProj() {
    const clickedProj = this.querySelector(".proj-name").innerText;
    activePgTitle.innerText = clickedProj;
    while (activePgBody.firstChild) {
        activePgBody.firstChild.remove();
    }
    projsAndTasks[clickedProj].forEach(i => createTask(i));
}

function displayNavName() {
    activePgTitle.innerText = this.querySelector(".nav-link").innerText;
}

function showNewProjModal() {
    newProjModalBg.style.display = "block";
}

function addProjName() {
    if (!modalBoxProjTitle.value) {
        alert("Error: Name field must not be blank. Please provide a project name.");
    } else {
        if (createProjBtn.innerText === "Create Project") {
            for (const prop in projsAndTasks) {
                if (prop.toLowerCase() === modalBoxProjTitle.value.toLowerCase()) {
                    alert("Error: A project already exist with that name. Please choose a different project name.");
                    return;
                }
            }
            Object.assign(projsAndTasks, {[modalBoxProjTitle.value]: []});
            createProj(modalBoxProjTitle.value);
        } else {
            const currProjName = projListDivProjCards[clickedProjCardIndex].querySelector(".proj-name").innerText;
            const currProjNameText = currProjName.toLowerCase().replace(/\W/g, "-");

            const newProjName = modalBoxProjTitle.value;
            const newProjNameText = newProjName.toLowerCase().replace(/\W/g, "-");

            const projOptEle = shared.createElement("option", [newProjName], {id: `${newProjNameText}-proj-opt`});
            projDropDown.querySelector(`#${currProjNameText}-proj-opt`).replaceWith(projOptEle);

            projListDivProjCards[clickedProjCardIndex].querySelector(".task-amt").classList.add(`${newProjNameText}-task-amt`);
            projListDivProjCards[clickedProjCardIndex].querySelector(".task-amt").classList.remove(`${currProjNameText}-task-amt`);

            projListDivProjCards[clickedProjCardIndex].querySelector(".edit-proj-btn").setAttribute("proj", newProjNameText);
            projListDivProjCards[clickedProjCardIndex].querySelector(".trash-proj-btn").setAttribute("proj", newProjNameText);

            projsAndTasks[newProjName] = projsAndTasks[currProjName];
            delete projsAndTasks[currProjName];

            if (activePgTitle.innerText === currProjName) {
                activePgTitle.innerText = newProjName;
            }

            projListDivProjCards[clickedProjCardIndex].querySelector(".proj-name").innerText = newProjName;
            newProjModalBg.style.display = "none";
            modalBoxProjTitle.value = "";
        }
    }
}

function createProj(projName) {
    const projNameSpan = shared.createElement("span", [projName], {class: "proj-name"});

    const taskAmtSpan = shared.createElement("span", [projsAndTasks[projName].length]);
    const projNameText = projName.toLowerCase().replace(/\W/g, "-");
    taskAmtSpan.classList.add("task-amt", `${projNameText}-task-amt`);

    const editIcon = document.createElement("i");
    editIcon.classList.add("fas", "fa-pen");
    const editBtn = shared.createElement("button", [editIcon], {class: "edit-proj-btn", proj: projNameText});

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash");
    const deleteBtn = shared.createElement("button", [deleteIcon], {class: "trash-proj-btn", proj: projNameText});
    
    const projDiv = shared.createElement("div", [projNameSpan, taskAmtSpan, editBtn, deleteBtn], {class: "proj"});
    projDiv.addEventListener("click", displayProj);
    projListDiv.append(projDiv);

    const projOptEle = shared.createElement("option", [projName], {id: `${projNameText}-proj-opt`});
    projDropDown.append(projOptEle);

    modalBoxProjTitle.value = "";
    newProjModalBg.style.display = "none";
}

function showNewTaskModal() {
    const projOptsArr = Array.from(projDropDown.children);
    if (projOptsArr.some(i => i.value === activePgTitle.innerText)) {
        const activePgProjOptIndex = projOptsArr.findIndex((i) => i.value === activePgTitle.innerText);
        projDropDown.children[activePgProjOptIndex].selected = true;
    } else {
        projDropDown.children[0].selected = true;
    }

    newTaskModalBg.style.display = "block";
}

function addTask() {
    if (!modalBoxTaskTitle.value) {
        alert("Error: Task field must not be blank. Please write a task.");
    } else {
        if (addTaskBtn.innerText === "Add Task") {
            for (const prop in projsAndTasks) {
                if (prop === projDropDown.value) {
                    const taskInfo = {
                        taskDone: false,
                        task: modalBoxTaskTitle.value,
                        note: modalBoxTaskNote.value,
                        dueDate: modalBoxTaskDate.value,
                        important: modalBoxTaskImportance.checked
                    };
    
                    projsAndTasks[prop].push(taskInfo);
                    const projNameText = prop.toLowerCase().replace(/\W/g, "-");
                    document.querySelector(`.${projNameText}-task-amt`).innerText = projsAndTasks[prop].length;
                    
                    if (activePgTitle.innerText === projDropDown.value) {
                        createTask(taskInfo);
                    }
                }
            }
        } else {
            const clickedCardChkBox = activePgBody.children[clickedTaskCardIndex].querySelector(".task-done-chkbox");

            for (const prop in projsAndTasks) {
                if (prop === projDropDown.value) {
                    // Get current task details
                    const taskInfo = {
                        taskDone: clickedCardChkBox.checked,
                        task: modalBoxTaskTitle.value,
                        note: modalBoxTaskNote.value,
                        dueDate: modalBoxTaskDate.value,
                        important: modalBoxTaskImportance.checked
                    };

                    // Update task details
                    projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].taskDone = taskInfo.taskDone;
                    projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].task = taskInfo.task;
                    projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].note = taskInfo.note;
                    projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].dueDate = taskInfo.dueDate;
                    projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].important = taskInfo.important;

                    // Move task to the selected project if the active page title is different from the selected project
                    if (activePgTitle.innerText !== projDropDown.value) {
                        const removedTaskCard = projsAndTasks[activePgTitle.innerText].splice(clickedTaskCardIndex, 1);
                        const activePgTitleText = activePgTitle.innerText.toLowerCase().replace(/\W/g, "-");
                        const projDropDownText = projDropDown.value.toLowerCase().replace(/\W/g, "-");
                        projsAndTasks[projDropDown.value].push(removedTaskCard[0]);
                        document.querySelector(`.${activePgTitleText}-task-amt`).innerText = projsAndTasks[activePgTitle.innerText].length;
                        document.querySelector(`.${projDropDownText}-task-amt`).innerText = projsAndTasks[projDropDown.value].length;
                    }
                    
                    // Regenerate task cards
                    while (activePgBody.firstChild) {
                        activePgBody.firstChild.remove();
                    }

                    projsAndTasks[activePgTitle.innerText].forEach(i => createTask(i));
                }
            }
        }
        modalBoxTaskTitle.value = "";
        modalBoxTaskNote.value = "";
        modalBoxTaskDate.value = "";
        modalBoxTaskImportance.checked = false;
        newTaskModalBg.style.display = "none";
    }
}

function createTask(taskInfoObj) {
    const taskDoneInputEle = shared.createElement("input", null, {type: "checkbox", class: "task-done-chkbox"});
    const taskSpan = shared.createElement("span", [taskInfoObj.task]);

    if (taskInfoObj.taskDone) {
        taskDoneInputEle.checked = true;
        taskSpan.classList.add("task", "task-done");
    } else {
        taskDoneInputEle.checked = false;
        taskSpan.classList.add("task");
    }

    const dueDateSpan = shared.createElement("span", [taskInfoObj.dueDate], {class: "due-date"});
    const taskAndDateDiv = shared.createElement("div", [taskSpan, dueDateSpan], {class: "task-and-due-date"});

    const starIcon = document.createElement("i");
    if (taskInfoObj.important) {
        starIcon.classList.add("fas", "fa-star", "important-task");
    } else {
        starIcon.classList.add("fas", "fa-star");
    }
    const starBtn = shared.createElement("button", [starIcon]);

    const penIcon = document.createElement("i");
    penIcon.classList.add("fas", "fa-pen");
    const penBtn =  shared.createElement("button", [penIcon], {class: "edit-task-btn"});

    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fas", "fa-trash");
    const trashBtn = shared.createElement("button", [trashIcon], {class: "trash-task-btn"});

    const taskInfoSecEle = shared.createElement("section", [taskDoneInputEle, taskAndDateDiv, starBtn, penBtn, trashBtn], {class: "task-info"});
    
    const noteStrongEle =shared.createElement("strong", ["Note:"]);
    const noteHeaderSpan = shared.createElement("span", [noteStrongEle], {class: "note-header"});
    const noteBodySpan = shared.createElement("span", [taskInfoObj.note], {class: "note-body"});
    const taskNoteSecEle = shared.createElement("section", [noteHeaderSpan, noteBodySpan], {class: "task-note"});

    const taskCardDiv = shared.createElement("div", [taskInfoSecEle, taskNoteSecEle], {class: "task-card"});
    activePgBody.append(taskCardDiv);
    
    const activePgBodyTaskCards = activePgBody.children;
    for (let i = 0; i < activePgBodyTaskCards.length; i++) {
        if (!activePgBodyTaskCards[i].getAttribute("task-ind-ev-listener")) {
            activePgBodyTaskCards[i].setAttribute("task-ind-ev-listener", true);
            activePgBodyTaskCards[i].addEventListener("click", () => clickedTaskCardIndex = i);
        }
    }
}

function actOnProjEle(objClicked) {
    const newProjBtn = objClicked.target.closest("#new-proj-btn");
    const projModalHeader = document.getElementById("proj-modal-header");
    const editProjBtn = objClicked.target.closest(".edit-proj-btn");
    const trashProjBtn = objClicked.target.closest(".trash-proj-btn");

    if (newProjBtn) {
        projModalHeader.innerText = "New Project";
        createProjBtn.innerText = "Create Project";
        showNewProjModal();
    }

    if (editProjBtn) {
        projModalHeader.innerText = "Edit Project";
        createProjBtn.innerText = "Update Project";

        for (let i = 0; i < projListDivProjCards.length; i++) {
            const projName = projListDivProjCards[i].firstElementChild.innerText;
            const projNameText = projName.toLowerCase().replace(/\W/g, "-");

            if (editProjBtn.getAttribute("proj") === projNameText) {
                const clickedProjCard = projListDivProjCards[i];
                modalBoxProjTitle.value = clickedProjCard.querySelector(".proj-name").innerText;
                clickedProjCardIndex = i;
                showNewProjModal();
            }
        }
    }

    if (trashProjBtn) {
        for (let i = 0; i < projListDivProjCards.length; i++) {
            const projName = projListDivProjCards[i].firstElementChild.innerText;
            const projNameText = projName.toLowerCase().replace(/\W/g, "-");

            if (trashProjBtn.getAttribute("proj") === projNameText) {
                const clickedProjCard = projListDivProjCards[i];
                const clickedProjName = clickedProjCard.querySelector(".proj-name").innerText;
                delete projsAndTasks[clickedProjName];
                clickedProjCard.remove();
                displayTodayTasks();
            }
        }
    }
}

function actOnTaskEle(objClicked) {
    const addNewTaskBtn = objClicked.target.closest("#add-new-task-btn");
    const taskModalHeader = document.getElementById("task-modal-header");
    const taskDoneChkBox = objClicked.target.closest(".task-done-chkbox");
    const taskAndDueDateDiv = objClicked.target.closest(".task-and-due-date");
    const starIcon = objClicked.target.closest(".fa-star");
    const editTaskBtn = objClicked.target.closest(".edit-task-btn");
    const trashTaskBtn = objClicked.target.closest(".trash-task-btn");

    if (taskDoneChkBox) {
        const clickedCardTask = activePgBody.children[clickedTaskCardIndex].querySelector(".task");
        clickedCardTask.classList.toggle("task-done");
        if (taskDoneChkBox.checked) {
            projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].taskDone = true;
        } else {
            projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].taskDone = false;
        }
    }

    if (taskAndDueDateDiv) {
        const clickedCardNote = activePgBody.children[clickedTaskCardIndex].querySelector(".task-note");
        if (clickedCardNote.style.display === "") {
            clickedCardNote.style.display = "grid";
        } else {
            clickedCardNote.style.display = "";
        }
    }

    if (addNewTaskBtn) {
        taskModalHeader.innerText = "New Task";
        addTaskBtn.innerText = "Add Task";
        showNewTaskModal();
    }

    if (starIcon) {
        starIcon.classList.toggle("important-task");
        if (projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].important) {
            projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].important = false;
        } else {
            projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].important = true;
        }
    }

    if (editTaskBtn) {
        taskModalHeader.innerText = "Edit Task";
        addTaskBtn.innerText = "Update Task";
        modalBoxTaskTitle.value = projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].task;
        modalBoxTaskNote.value = projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].note;
        modalBoxTaskDate.value = projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].dueDate;
        modalBoxTaskImportance.checked = projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].important;
        showNewTaskModal();
    }

    if (trashTaskBtn) {
        projsAndTasks[activePgTitle.innerText].splice(clickedTaskCardIndex, 1);
        const activePgTitleText = activePgTitle.innerText.toLowerCase().replace(/\W/g, "-");
        document.querySelector(`.${activePgTitleText}-task-amt`).innerText = projsAndTasks[activePgTitle.innerText].length;
        while (activePgBody.firstChild) {
            activePgBody.firstChild.remove();
        }
        projsAndTasks[activePgTitle.innerText].forEach(i => createTask(i));
    }
}

function closeModal(objClicked) {
    if (objClicked.target === newProjModalBg || objClicked.target === closeProjModalBtn || objClicked.target === cancelProjBtn) {
        modalBoxProjTitle.value = "";
        newProjModalBg.style.display = "none";
    }

    if (objClicked.target === newTaskModalBg || objClicked.target === closeTaskModalBtn || objClicked.target === cancelTaskBtn) {
        modalBoxTaskTitle.value = "";
        modalBoxTaskNote.value = "";
        modalBoxTaskDate.value = "";
        modalBoxTaskImportance.checked = false;
        newTaskModalBg.style.display = "none";
    }
}