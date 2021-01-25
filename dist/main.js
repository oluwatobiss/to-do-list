/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aggregator.js":
/*!***************************!*\
  !*** ./src/aggregator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shared": () => /* reexport safe */ _shared_js__WEBPACK_IMPORTED_MODULE_0__.shared,
/* harmony export */   "header": () => /* reexport safe */ _header_js__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "mainEle": () => /* reexport safe */ _main_ele_js__WEBPACK_IMPORTED_MODULE_2__.default,
/* harmony export */   "aside": () => /* reexport safe */ _aside_js__WEBPACK_IMPORTED_MODULE_3__.default,
/* harmony export */   "newProjModal": () => /* reexport safe */ _new_proj_modal_js__WEBPACK_IMPORTED_MODULE_4__.default,
/* harmony export */   "newTaskModal": () => /* reexport safe */ _new_task_modal__WEBPACK_IMPORTED_MODULE_5__.default
/* harmony export */ });
/* harmony import */ var _shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.js */ "./src/shared.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _main_ele_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-ele.js */ "./src/main-ele.js");
/* harmony import */ var _aside_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aside.js */ "./src/aside.js");
/* harmony import */ var _new_proj_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-proj-modal.js */ "./src/new-proj-modal.js");
/* harmony import */ var _new_task_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-task-modal */ "./src/new-task-modal.js");


// export {default as projects} from "./projects.js";





/***/ }),

/***/ "./src/aside.js":
/*!**********************!*\
  !*** ./src/aside.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _aggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggregator.js */ "./src/aggregator.js");


const asideAreaContent = (() => {
    const newProjBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", ["New Project"], {type: "button", id: "new-proj-btn"});
    const projListDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", null, {id: "proj-list"});
    const footerIconEle = document.createElement("i");
    footerIconEle.classList.add("fas", "fa-arrow-alt-circle-right");
    const footerAnchorEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("a", ["Created by Oluwatobi Sofela ", footerIconEle], {href: "https://www.codesweetly.com/", target: "_blank"});
    const footerEle = document.createElement("footer");
    footerEle.append(footerAnchorEle);
    const asideEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("aside", [newProjBtn, projListDiv, footerEle], {id: "aside-ele"});
    return asideEle;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (asideAreaContent);

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _aggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggregator.js */ "./src/aggregator.js");


const headerAreaContent = (() => {
    const logoIconEle = document.createElement("i");
    logoIconEle.classList.add("fas", "fa-list-alt");
    const logoSpanEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [logoIconEle, " My Plans"]);
    const logoAnchorEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("a", [logoSpanEle], {href: "#", id: "logo"});
    const ulEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("ul", null, {id: "nav-links"});

    const menus = ["Today", "Tomorrow", "This Week", "Next Week", "All Tasks"];
    menus.forEach(createMenuLink);

    function createMenuLink(i) {
        const liEle = document.createElement("li");
        const anchorEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("a", [i], {href: "#", class: "nav-link"});
        liEle.append(anchorEle);
        ulEle.append(liEle);
    }

    const navEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("nav", [ulEle]);
    const headerEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("header", [logoAnchorEle, navEle], {id: "main-header"});
    return headerEle;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerAreaContent);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggregator.js */ "./src/aggregator.js");


const contentDiv = document.getElementById("content");
contentDiv.append(_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.header, _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.aside, _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.mainEle, _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.newProjModal, _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.newTaskModal);

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
        const projNameSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [prop], {class: "proj-name"});
        const taskAmtSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [projsAndTasks[prop].length]);
        const projNameText = prop.toLowerCase().replace(/\W/g, "-");
        taskAmtSpan.classList.add("task-amt", `${projNameText}-task-amt`);
        const projDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [projNameSpan, taskAmtSpan], {class: "proj"});
        projDiv.addEventListener("click", displayProj);
        projListDiv.append(projDiv);
        if (prop !== "Important") {
            const projOptEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("option", [prop]);
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

            const projOptEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("option", [newProjName], {id: `${newProjNameText}-proj-opt`});
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
    const projNameSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [projName], {class: "proj-name"});

    const taskAmtSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [projsAndTasks[projName].length]);
    const projNameText = projName.toLowerCase().replace(/\W/g, "-");
    taskAmtSpan.classList.add("task-amt", `${projNameText}-task-amt`);

    const editIcon = document.createElement("i");
    editIcon.classList.add("fas", "fa-pen");
    const editBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", [editIcon], {class: "edit-proj-btn", proj: projNameText});

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash");
    const deleteBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", [deleteIcon], {class: "trash-proj-btn", proj: projNameText});
    
    const projDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [projNameSpan, taskAmtSpan, editBtn, deleteBtn], {class: "proj"});
    projDiv.addEventListener("click", displayProj);
    projListDiv.append(projDiv);

    const projOptEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("option", [projName], {id: `${projNameText}-proj-opt`});
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
    const taskDoneInputEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("input", null, {type: "checkbox", class: "task-done-chkbox"});
    const taskSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [taskInfoObj.task]);

    if (taskInfoObj.taskDone) {
        taskDoneInputEle.checked = true;
        taskSpan.classList.add("task", "task-done");
    } else {
        taskDoneInputEle.checked = false;
        taskSpan.classList.add("task");
    }

    const dueDateSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [taskInfoObj.dueDate], {class: "due-date"});
    const taskAndDateDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [taskSpan, dueDateSpan], {class: "task-and-due-date"});

    const starIcon = document.createElement("i");
    if (taskInfoObj.important) {
        starIcon.classList.add("fas", "fa-star", "important-task");
    } else {
        starIcon.classList.add("fas", "fa-star");
    }
    const starBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", [starIcon]);

    const penIcon = document.createElement("i");
    penIcon.classList.add("fas", "fa-pen");
    const penBtn =  _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", [penIcon], {class: "edit-task-btn"});

    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fas", "fa-trash");
    const trashBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", [trashIcon], {class: "trash-task-btn"});

    const taskInfoSecEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("section", [taskDoneInputEle, taskAndDateDiv, starBtn, penBtn, trashBtn], {class: "task-info"});
    
    const noteStrongEle =_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("strong", ["Note:"]);
    const noteHeaderSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [noteStrongEle], {class: "note-header"});
    const noteBodySpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [taskInfoObj.note], {class: "note-body"});
    const taskNoteSecEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("section", [noteHeaderSpan, noteBodySpan], {class: "task-note"});

    const taskCardDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [taskInfoSecEle, taskNoteSecEle], {class: "task-card"});
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

/***/ }),

/***/ "./src/main-ele.js":
/*!*************************!*\
  !*** ./src/main-ele.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _aggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggregator.js */ "./src/aggregator.js");


const mainEleArea = (() => {
    const activePgTitle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", null, {id: "active-page-title"});
    const addNewTaskBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", ["Add New Task"], {id: "add-new-task-btn"});
    const activePgHeader = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("header", [activePgTitle, addNewTaskBtn], {id: "active-page-header"});
    const activePgBody = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", null, {id: "active-page-body"});
    const mainEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("main", [activePgHeader, activePgBody], {id: "main-ele"});
    return mainEle;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainEleArea);

{/* <main>
    <header id="active-page-header">
        <span id="active-page-title">Cook</span>
        <button>Add New Task</button>
    </header>
    <div id="active-page-body">
        <div class="task-card">
            <section class="task-info">
                <input type="checkbox" class="task-done-chkbox">
                <div class="task-and-due-date">
                    <span class="task">Rice</span>
                    <span class="due-date">Due: Fri 24 May . 4 months time</span>
                </div>
                <button><i class="fas fa-star"></i></button>
                <button><i class="fas fa-pen"></i></button>
                <button><i class="fas fa-trash"></i></button>
            </section>
            <section class="task-note">
                <span class="note-header"><strong>Note:</strong></span>
                <span class="note-body">Brainstorm what kind of properties your todo-items are going to have. At a minimum they should have a title, description, dueDate and priority. You might also want to include notes or even a checklist.</span>
            </section>
        </div>
    </div>
</main> */}

/***/ }),

/***/ "./src/new-proj-modal.js":
/*!*******************************!*\
  !*** ./src/new-proj-modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _aggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggregator.js */ "./src/aggregator.js");


const newProjModal = (() => {
    const headerTextSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", null, {id: "proj-modal-header"});
    const closeModalSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", ["x"], {id: "close-proj-modal", class: "close-modal"});
    const headerEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("header", [headerTextSpan, closeModalSpan]);

    const cancelProjBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", ["Cancel"], {type: "button", id: "cancel-proj-btn"});
    cancelProjBtn.classList.add("modal-btn", "cancel-btn");

    const createProjBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", null, {type: "button", id: "create-proj-btn"});
    createProjBtn.classList.add("modal-btn", "create-btn");

    const modalBtnDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [cancelProjBtn, createProjBtn], {class: "modal-btns-div"});
    
    const formLabelEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("label", ["Name"], {for: "proj-title"});
    const formInputEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("input", null, {type: "text", id: "proj-title"});
    const newProjFormEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("form", [formLabelEle, formInputEle, modalBtnDiv], {id: "new-proj-form"});

    const modalBoxBodyDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [newProjFormEle], {class: "modal-box-body"});
    const modalBoxDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [headerEle, modalBoxBodyDiv], {id:"new-proj-modal-box", class: "modal-box"});
    const modalBgSection = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("section", [modalBoxDiv], {id: "new-proj-modal-bg", class: "modal-bg"});
    return modalBgSection;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProjModal);

/***/ }),

/***/ "./src/new-task-modal.js":
/*!*******************************!*\
  !*** ./src/new-task-modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _aggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggregator.js */ "./src/aggregator.js");


const newTaskModal = (() => {
    const headerTextSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span",null, {id: "task-modal-header"});
    const closeModalSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", ["x"], {id: "close-task-modal", class: "close-modal"});
    const headerEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("header", [headerTextSpan, closeModalSpan]);
    
    const taskLabelEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("label", ["Task"], {for: "task-title"});
    const taskInputEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("input", null, {type: "text", id: "task-title"});
    const taskDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [taskLabelEle, taskInputEle], {id: "task"});

    const noteLabelEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("label", ["Note"], {for: "task-note"});
    const noteTextAreaEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("textarea", null, {id: "task-note"});
    const noteDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [noteLabelEle, noteTextAreaEle], {id: "note"});

    const dueDateLabelEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("label", ["Due Date"], {for: "task-date"});
    const dueDateInputEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("input", null, {type: "date", id: "task-date"});
    const dueDateDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [dueDateLabelEle, dueDateInputEle], {id: "due-date"});

    const importanceTextSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", ["Mark as important"]);
    const importanceInputEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("input", null, {type: "checkbox", id: "task-importance"});
    const importanceLabelEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("label", [importanceTextSpan, importanceInputEle]);
    const importanceDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [importanceLabelEle], {id: "importance"});

    const addToProjLabelEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("label", ["Add to project"], {for: "proj-dropdown"});
    const addToProjSelectEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("select", null, {id: "proj-dropdown"});
    const addToProjDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [addToProjLabelEle, addToProjSelectEle], {id: "add-to-proj"});

    const cancelTaskBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", ["Cancel"], {type: "button", id: "cancel-task-btn"});
    cancelTaskBtn.classList.add("modal-btn", "cancel-btn");
    const addTaskBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", null, {type: "button", id: "add-task-btn"});
    addTaskBtn.classList.add("modal-btn", "create-btn");
    const modalBtnDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [cancelTaskBtn, addTaskBtn], {class: "modal-btns-div"});
    
    const newProjFormEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("form", [taskDiv, noteDiv, dueDateDiv, importanceDiv, addToProjDiv, modalBtnDiv], {id: "new-proj-form"});

    const modalBoxBodyDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [newProjFormEle], {class: "modal-box-body"});
    const modalBoxDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [headerEle, modalBoxBodyDiv], {id:"new-task-modal-box", class: "modal-box"});
    const modalBgSection = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("section", [modalBoxDiv], {id: "new-task-modal-bg", class: "modal-bg"});
    return modalBgSection;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTaskModal);

/***/ }),

/***/ "./src/shared.js":
/*!***********************!*\
  !*** ./src/shared.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shared": () => /* binding */ shared
/* harmony export */ });
const shared = (() => {
    return {
        createElement(eleType, node, attr) {
            const element = document.createElement(eleType);
            if (node) {node.forEach(i => element.append(i));}
            if (attr) {
                for (let key in attr) {element.setAttribute(key, attr[key]);}
            }
            return element;
        }
    }
})();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map