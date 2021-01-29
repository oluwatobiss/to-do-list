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
const projCards = projListDiv.children;
const mainEleNode = document.getElementById("main-ele");
const activePgTitle = document.getElementById("active-pg-title");
const activePgBody = document.getElementById("active-pg-body");
const taskCards = activePgBody.children;

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

const defaultProjs = (() => {
    for (const prop in projsAndTasks) {
        if (prop === "Important" || prop === "Random") {
            const projNameSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [prop], {class: "proj-name"});
    
            const taskAmtSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [projsAndTasks[prop].length]);
            const projNameConvert = prop.toLowerCase().replace(/\W/g, "-");
            taskAmtSpan.classList.add("task-amt", `${projNameConvert}-task-amt`);
            
            const projDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [projNameSpan, taskAmtSpan], {class: "proj"});
            projDiv.addEventListener("click", displayProj);
            projListDiv.append(projDiv);

            if (prop !== "Important") {
                const projOptEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("option", [prop]);
                projDropDown.append(projOptEle);
            }
        }
    }
})();

let clickedProjCardIndex = null;
let clickedTaskCardIndex = null;

window.addEventListener("click", closeModal);
window.addEventListener("load", () => displayNavName("windowLoaded"));
navLinks.forEach(i => i.addEventListener("click", displayNavName));
createProjBtn.addEventListener("click", addProjName);
addTaskBtn.addEventListener("click", addTask);
mainEleNode.addEventListener("click", actOnTaskEle);
asideEleNode.addEventListener("click", actOnProjEle);

function displayProj() {
    const clickedProj = this.querySelector(".proj-name").innerText;
    activePgTitle.innerText = clickedProj;

    while (activePgBody.firstChild) {
        activePgBody.firstChild.remove();
    }

    projsAndTasks[clickedProj].forEach(i => createTask(i));
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

function displayNavName(event) {
    let clickedNavLink = null;
    if (event === "windowLoaded") {
        clickedNavLink = "Today";
    } else {
        clickedNavLink = this.querySelector(".nav-link").innerText;
    }

    activePgTitle.innerText = clickedNavLink;

    while (activePgBody.firstChild) {
        activePgBody.firstChild.remove();
    }

    if (clickedNavLink === "Today") {
        console.log("This is the space for Today's tasks");

        for (const prop in projsAndTasks) {
            if (prop !== "Important") {
                // projsAndTasks[prop].forEach(i => createTask(i));
                projsAndTasks[prop].forEach(i => {
                    console.log(projsAndTasks[prop]);
                    console.log(i);
                    console.log(i.dueDate);
                });
            }
        }
    }

    if (clickedNavLink === "All Tasks") {
        console.log("This is the space for all tasks");

        for (const prop in projsAndTasks) {
            if (prop !== "Important") {
                projsAndTasks[prop].forEach(i => createTask(i));
            }
        }
    }
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
            const currProjName = projCards[clickedProjCardIndex].querySelector(".proj-name").innerText;
            const currprojNameConvert = currProjName.toLowerCase().replace(/\W/g, "-");

            const newProjName = modalBoxProjTitle.value;
            const newprojNameConvert = newProjName.toLowerCase().replace(/\W/g, "-");

            const projOptEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("option", [newProjName], {id: `${newprojNameConvert}-proj-opt`});
            projDropDown.querySelector(`#${currprojNameConvert}-proj-opt`).replaceWith(projOptEle);

            projCards[clickedProjCardIndex].querySelector(".task-amt").classList.add(`${newprojNameConvert}-task-amt`);
            projCards[clickedProjCardIndex].querySelector(".task-amt").classList.remove(`${currprojNameConvert}-task-amt`);

            projCards[clickedProjCardIndex].querySelector(".edit-proj-btn").setAttribute("proj", newprojNameConvert);
            projCards[clickedProjCardIndex].querySelector(".trash-proj-btn").setAttribute("proj", newprojNameConvert);

            projsAndTasks[newProjName] = projsAndTasks[currProjName];
            delete projsAndTasks[currProjName];

            if (activePgTitle.innerText === currProjName) {
                activePgTitle.innerText = newProjName;
            }

            projCards[clickedProjCardIndex].querySelector(".proj-name").innerText = newProjName;
            newProjModalBg.style.display = "none";
            modalBoxProjTitle.value = "";
        }
    }
}

function createProj(projName) {
    const projNameSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [projName], {class: "proj-name"});

    const taskAmtSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [projsAndTasks[projName].length]);
    const projNameConvert = projName.toLowerCase().replace(/\W/g, "-");
    taskAmtSpan.classList.add("task-amt", `${projNameConvert}-task-amt`);

    const editIcon = document.createElement("i");
    editIcon.classList.add("fas", "fa-pen");
    const editBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", [editIcon], {class: "edit-proj-btn", proj: projNameConvert});

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash");
    const deleteBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", [deleteIcon], {class: "trash-proj-btn", proj: projNameConvert});
    
    const projDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [projNameSpan, taskAmtSpan, editBtn, deleteBtn], {class: "proj"});
    projDiv.addEventListener("click", displayProj);
    projListDiv.append(projDiv);

    const projOptEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("option", [projName], {id: `${projNameConvert}-proj-opt`});
    projDropDown.append(projOptEle);

    modalBoxProjTitle.value = "";
    newProjModalBg.style.display = "none";
}

function showNewTaskModal() {
    newTaskModalBg.style.display = "block";
}

function addTask() {
    if (!modalBoxTaskTitle.value) {
        alert("Error: Task field must not be blank. Please write a task.");
    } else {
        if (addTaskBtn.innerText === "Add Task") {
            for (const prop in projsAndTasks) {
                if (prop === projDropDown.value) {
                    const projNameConvert = prop.toLowerCase().replace(/\W/g, "-");
                    const taskInfo = {
                        taskProj: prop,
                        taskDone: false,
                        task: modalBoxTaskTitle.value,
                        note: modalBoxTaskNote.value,
                        dueDate: modalBoxTaskDate.value,
                        important: modalBoxTaskImportance.checked
                    };
    
                    projsAndTasks[prop].push(taskInfo);

                    if (taskInfo.important) {
                        projsAndTasks.Important.push(taskInfo);
                        document.querySelector(".important-task-amt").innerText = projsAndTasks.Important.length;
                    }
                    
                    document.querySelector(`.${projNameConvert}-task-amt`).innerText = projsAndTasks[prop].length;
                    
                    if (activePgTitle.innerText === "All Tasks" ||
                        activePgTitle.innerText === projDropDown.value ||
                        (activePgTitle.innerText === "Important" && taskInfo.important)) {
                        createTask(taskInfo);
                    }
                }
            }
        } else {
            for (const prop in projsAndTasks) {
                // Find the selected project
                if (prop === projDropDown.value) {
                    const clickedTaskProjName = taskCards[clickedTaskCardIndex].querySelector(".task-proj").getAttribute("taskProj");
                    const clickedTaskChkBox = taskCards[clickedTaskCardIndex].querySelector(".task-done-chkbox");
                    const clickedTaskImportance = taskCards[clickedTaskCardIndex].querySelector(".important-btn").getAttribute("important");
                    const clickedTaskCard = activePgBody.children[clickedTaskCardIndex];
                    const clickedTaskTitle = clickedTaskCard.querySelector(".task").innerText;
                    // Store the new task details
                    const taskInfo = {
                        taskProj: prop,
                        taskDone: clickedTaskChkBox.checked,
                        task: modalBoxTaskTitle.value,
                        note: modalBoxTaskNote.value,
                        dueDate: modalBoxTaskDate.value,
                        important: modalBoxTaskImportance.checked
                    };

                    if (clickedTaskImportance === "true" && taskInfo.important === true) {
                        console.log("Both are important!");
                        projsAndTasks.Important.forEach(updateTask);
                        projsAndTasks[clickedTaskProjName].forEach(updateTask);
                    } else if (clickedTaskImportance === "true" && taskInfo.important === false) {
                        console.log("Only clicked task is important!");
                        projsAndTasks.Important.forEach(delTaskFromImpProj);
                        projsAndTasks[clickedTaskProjName].forEach(updateTask);
                    } else if (clickedTaskImportance === "false" && taskInfo.important === true) {
                        console.log("Only updated task is important!");
                        projsAndTasks.Important.push(taskInfo);
                        document.querySelector(".important-task-amt").innerText = projsAndTasks.Important.length;
                        projsAndTasks[clickedTaskProjName].forEach(updateTask);
                    } else if (clickedTaskImportance === "false" && taskInfo.important === false) {
                        console.log("None is important!");
                        projsAndTasks[clickedTaskProjName].forEach(updateTask);
                    }

                    function updateTask(currItem) {
                        if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                            currItem.taskProj = prop;
                            currItem.taskDone = taskInfo.taskDone;
                            currItem.task = taskInfo.task;
                            currItem.note = taskInfo.note;
                            currItem.dueDate = taskInfo.dueDate;
                            currItem.important = taskInfo.important;
                        }
                    }

                    function delTaskFromImpProj(currItem, currItemInd) {
                        if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                            projsAndTasks.Important.splice(currItemInd, 1);
                            document.querySelector(".important-task-amt").innerText = projsAndTasks.Important.length;
                        }
                    }

                    // If the clicked task's project name is different from the selected project
                    if (clickedTaskProjName !== projDropDown.value) {
                        // Move updated task to the selected project
                        if (activePgTitle.innerText === clickedTaskProjName) {
                            console.log("Page title and clicked task's project are the same!");
                            const removedTask = projsAndTasks[clickedTaskProjName].splice(clickedTaskCardIndex, 1);
                            projsAndTasks[projDropDown.value].push(removedTask[0]);
                        } else {
                            console.log("Page title and clicked task's project are different!");
                            projsAndTasks[clickedTaskProjName].forEach(relocateUpdatedTask);
                            function relocateUpdatedTask(currItem, currItemInd) {
                                if (currItem.taskProj === projDropDown.value && currItem.task === clickedTaskTitle) {
                                    const removedTask = projsAndTasks[clickedTaskProjName].splice(currItemInd, 1);
                                    console.log(removedTask);
                                    projsAndTasks[projDropDown.value].push(removedTask[0]);
                                }
                            }
                        }


                        // Update the clicked task's current project's task amount
                        const clickedTaskprojNameConvert = clickedTaskProjName.toLowerCase().replace(/\W/g, "-");
                        document.querySelector(`.${clickedTaskprojNameConvert}-task-amt`).innerText = projsAndTasks[clickedTaskProjName].length;

                        // Update the selected project's task amount
                        const projDropDownConvert = projDropDown.value.toLowerCase().replace(/\W/g, "-");
                        document.querySelector(`.${projDropDownConvert}-task-amt`).innerText = projsAndTasks[projDropDown.value].length;
                    }
                    
                        // Regenerate task cards
                        while (activePgBody.firstChild) {
                            activePgBody.firstChild.remove();
                        }
    
                        if (activePgTitle.innerText === "All Tasks") {
                            for (const prop in projsAndTasks) {
                                if (prop !== "Important") {
                                    projsAndTasks[prop].forEach(i => createTask(i));
                                }
                            }
                        } else {
                            projsAndTasks[activePgTitle.innerText].forEach(i => createTask(i));
                        }
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
    console.log(taskInfoObj);
    console.log(taskInfoObj.task);
    const taskSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [taskInfoObj.task]);
    const taskConvert = taskInfoObj.task.toLowerCase().replace(/\W/g, "-");
    const taskDoneInputEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("input", null, {type: "checkbox", class: "task-done-chkbox", task: taskConvert});

    if (taskInfoObj.taskDone) {
        taskDoneInputEle.checked = true;
        taskSpan.classList.add("task", "task-done");
    } else {
        taskDoneInputEle.checked = false;
        taskSpan.classList.add("task");
    }

    const dueDateSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [taskInfoObj.dueDate], {class: "due-date"});
    const taskAndDateDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [taskSpan, dueDateSpan], {class: "task-and-due-date", task: taskConvert});

    const starIcon = document.createElement("i");
    if (taskInfoObj.important) {
        starIcon.classList.add("fas", "fa-star", "important-task");
    } else {
        starIcon.classList.add("fas", "fa-star");
    }

    let starBtn = null;

    if (taskInfoObj.important) {
        starBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", [starIcon], {class: "important-btn", task: taskConvert, important: true});
    } else {
        starBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", [starIcon], {class: "important-btn", task: taskConvert, important: false});
    }

    const penIcon = document.createElement("i");
    penIcon.classList.add("fas", "fa-pen");
    const penBtn =  _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", [penIcon], {class: "edit-task-btn", task: taskConvert});

    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fas", "fa-trash");
    const trashBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", [trashIcon], {class: "trash-task-btn", task: taskConvert});

    const taskInfoSecEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("section", [taskDoneInputEle, taskAndDateDiv, starBtn, penBtn, trashBtn], {class: "task-info"});
    
    const noteStrongEle =_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("strong", ["Note:"]);
    const noteHeaderSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [noteStrongEle], {class: "note-header"});
    const noteBodySpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", [taskInfoObj.note], {class: "note-body"});
    const taskProjSpan = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", null, {class: "task-proj", taskProj: taskInfoObj.taskProj});
    taskProjSpan.innerHTML = `<strong>Project:</strong> ${taskInfoObj.taskProj}`;
    const taskNoteSecEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("section", [noteHeaderSpan, noteBodySpan, taskProjSpan], {class: "task-note"});

    const taskCardDiv = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", [taskInfoSecEle, taskNoteSecEle], {class: "task-card"});
    activePgBody.append(taskCardDiv);
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

        for (let i = 0; i < projCards.length; i++) {
            const projName = projCards[i].firstElementChild.innerText;
            const projNameConvert = projName.toLowerCase().replace(/\W/g, "-");

            if (editProjBtn.getAttribute("proj") === projNameConvert) {
                const clickedProjCard = projCards[i];
                modalBoxProjTitle.value = clickedProjCard.querySelector(".proj-name").innerText;
                clickedProjCardIndex = i;
                showNewProjModal();
            }
        }
    }

    if (trashProjBtn) {
        for (let i = 0; i < projCards.length; i++) {
            const projName = projCards[i].firstElementChild.innerText;
            const projNameConvert = projName.toLowerCase().replace(/\W/g, "-");

            if (trashProjBtn.getAttribute("proj") === projNameConvert) {
                const clickedProjCard = projCards[i];
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
        for (let i = 0; i < taskCards.length; i++) {
            const task = taskCards[i].querySelector(".task").innerText;
            const taskConvert = task.toLowerCase().replace(/\W/g, "-");
            if (taskDoneChkBox.getAttribute("task") === taskConvert) {
                clickedTaskCardIndex = i;
            }
        }
        const clickedCardTask = activePgBody.children[clickedTaskCardIndex].querySelector(".task");
        clickedCardTask.classList.toggle("task-done");
        if (taskDoneChkBox.checked) {
            projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].taskDone = true;
        } else {
            projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].taskDone = false;
        }
    }

    if (taskAndDueDateDiv) {
        for (let i = 0; i < taskCards.length; i++) {
            const task = taskCards[i].querySelector(".task").innerText;
            const taskConvert = task.toLowerCase().replace(/\W/g, "-");
            if (taskAndDueDateDiv.getAttribute("task") === taskConvert) {
                clickedTaskCardIndex = i;
            }
        }
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
        
        const projOptsArr = Array.from(projDropDown.children);
        if (projOptsArr.some(i => i.value === activePgTitle.innerText)) {
            const activePgProjOptIndex = projOptsArr.findIndex((i) => i.value === activePgTitle.innerText);
            projDropDown.children[activePgProjOptIndex].selected = true;
        } else {
            projDropDown.children[0].selected = true;
        }

        showNewTaskModal();
    }

    if (starIcon) {
        for (let i = 0; i < taskCards.length; i++) {
            const task = taskCards[i].querySelector(".task").innerText;
            const taskConvert = task.toLowerCase().replace(/\W/g, "-");
            if (starIcon.closest("button").getAttribute("task") === taskConvert) {
                clickedTaskCardIndex = i;
            }
        }

        const clickedTaskCard = taskCards[clickedTaskCardIndex];
        const clickedTaskProjName = clickedTaskCard.querySelector(".task-proj").getAttribute("taskProj");
        const clickedTaskTitle = clickedTaskCard.querySelector(".task").innerText;

        starIcon.classList.toggle("important-task");

        if (activePgTitle.innerText === "Important") {
            projsAndTasks[clickedTaskProjName].forEach(changeImpToFalse);

            function changeImpToFalse(currItem, currItemInd) {
                if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                    projsAndTasks[clickedTaskProjName][currItemInd].important = false;
                    clickedTaskCard.querySelector(".important-btn").setAttribute("important", false);
                }
            }

            projsAndTasks.Important.forEach(delTaskFromImpProj);
            
            while (activePgBody.firstChild) {
                activePgBody.firstChild.remove();
            }

            projsAndTasks.Important.forEach(i => createTask(i));
        }

        if (activePgTitle.innerText !== "Important") {
            if (activePgTitle.innerText === "All Tasks") {
                projsAndTasks[clickedTaskProjName].forEach(changeTaskImportance);

                function changeTaskImportance(currItem, currItemInd) {
                    if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                        if (currItem.important) {
                            currItem.important = false;
                            clickedTaskCard.querySelector(".important-btn").setAttribute("important", false);
                            projsAndTasks.Important.forEach(delTaskFromImpProj);
                        } else {
                            currItem.important = true;
                            clickedTaskCard.querySelector(".important-btn").setAttribute("important", true);
                            projsAndTasks.Important.push(projsAndTasks[clickedTaskProjName][currItemInd]);
                            document.querySelector(".important-task-amt").innerText = projsAndTasks.Important.length;
                        }
                    }
                }
            } else {
                if (projsAndTasks[clickedTaskProjName][clickedTaskCardIndex].important) {
                    projsAndTasks[clickedTaskProjName][clickedTaskCardIndex].important = false;
                    clickedTaskCard.querySelector(".important-btn").setAttribute("important", false);
                    projsAndTasks.Important.forEach(delTaskFromImpProj);
                } else {
                    projsAndTasks[clickedTaskProjName][clickedTaskCardIndex].important = true;
                    clickedTaskCard.querySelector(".important-btn").setAttribute("important", true);
                    projsAndTasks.Important.push(projsAndTasks[clickedTaskProjName][clickedTaskCardIndex]);
                    document.querySelector(".important-task-amt").innerText = projsAndTasks.Important.length;
                }
            }
        }

        function delTaskFromImpProj(currItem, currItemInd) {
            if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                projsAndTasks.Important.splice(currItemInd, 1);
                document.querySelector(".important-task-amt").innerText = projsAndTasks.Important.length;
            }
        }
    }

    if (editTaskBtn) {
        for (let i = 0; i < taskCards.length; i++) {
            const task = taskCards[i].querySelector(".task").innerText;
            const taskConvert = task.toLowerCase().replace(/\W/g, "-");
            if (editTaskBtn.closest("button").getAttribute("task") === taskConvert) {
                clickedTaskCardIndex = i;
                console.log(`The clicked task is at index ${clickedTaskCardIndex}`);
            }
        }

        const projOptsArr = Array.from(projDropDown.children);
        const clickedTaskCard = taskCards[clickedTaskCardIndex];
        const clickedTaskTitle = clickedTaskCard.querySelector(".task").innerText;
        const clickedTaskProjName = clickedTaskCard.querySelector(".task-proj").getAttribute("taskProj");

        taskModalHeader.innerText = "Edit Task";
        addTaskBtn.innerText = "Update Task";

        if (activePgTitle.innerText === "All Tasks") {
            projsAndTasks[clickedTaskProjName].forEach(preFillModalBox);

            function preFillModalBox(currItem) {
                if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                    modalBoxTaskTitle.value = currItem.task;
                    modalBoxTaskNote.value = currItem.note;
                    modalBoxTaskDate.value = currItem.dueDate;
                    modalBoxTaskImportance.checked = currItem.important;
                }
            }
        } else {
            modalBoxTaskTitle.value = projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].task;
            modalBoxTaskNote.value = projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].note;
            modalBoxTaskDate.value = projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].dueDate;
            modalBoxTaskImportance.checked = projsAndTasks[activePgTitle.innerText][clickedTaskCardIndex].important;
        }

        if (projOptsArr.some(i => i.value === clickedTaskProjName)) {
            const activePgProjOptIndex = projOptsArr.findIndex((i) => i.value === clickedTaskProjName);
            projDropDown.children[activePgProjOptIndex].selected = true;
        }

        showNewTaskModal();
    }

    if (trashTaskBtn) {
        for (let i = 0; i < taskCards.length; i++) {
            const task = taskCards[i].querySelector(".task").innerText;
            const taskConvert = task.toLowerCase().replace(/\W/g, "-");
            if (trashTaskBtn.closest("button").getAttribute("task") === taskConvert) {
                clickedTaskCardIndex = i;
            }
        }
        const clickedTaskCard = activePgBody.children[clickedTaskCardIndex];
        const clickedTaskProjName = clickedTaskCard.querySelector(".task-proj").getAttribute("taskProj");
        const clickedTaskProjNameConvert = clickedTaskProjName.toLowerCase().replace(/\W/g, "-");
        const clickedTaskTitle = clickedTaskCard.querySelector(".task").innerText;

        console.log(projsAndTasks[clickedTaskProjName]);

        if (activePgTitle.innerText !== "Important") {
            if (activePgTitle.innerText === "All Tasks") {
                for (let i = 0; i < projsAndTasks[clickedTaskProjName].length; i++) {
                    const currItem = projsAndTasks[clickedTaskProjName][i];
                    if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                        projsAndTasks[clickedTaskProjName].splice(i, 1);
                        if (currItem.important) {
                            projsAndTasks.Important.forEach(delTaskFromImpProj);
                        }
                    }
                }
            } else {
                projsAndTasks[clickedTaskProjName].splice(clickedTaskCardIndex, 1);
                if (projsAndTasks[clickedTaskProjName][clickedTaskCardIndex].important) {
                    projsAndTasks.Important.forEach(delTaskFromImpProj);
                }
            }
        }

        if (activePgTitle.innerText === "Important") {
            projsAndTasks.Important.forEach(delTaskFromImpProj);

            for (let i = 0; i < projsAndTasks[clickedTaskProjName].length; i++) {
                const currItem = projsAndTasks[clickedTaskProjName][i];
                if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                    projsAndTasks[clickedTaskProjName].splice(i, 1);
                }
            }
        }

        document.querySelector(`.${clickedTaskProjNameConvert}-task-amt`).innerText = projsAndTasks[clickedTaskProjName].length;

        while (activePgBody.firstChild) {
            activePgBody.firstChild.remove();
        }

        if (activePgTitle.innerText === "Important") {
            projsAndTasks.Important.forEach(i => createTask(i));
        } else if (activePgTitle.innerText === "All Tasks") {
            for (const prop in projsAndTasks) {
                if (prop !== "Important") {
                    projsAndTasks[prop].forEach(i => createTask(i));
                }
            }
        } else {
            projsAndTasks[clickedTaskProjName].forEach(i => createTask(i));
        }

        function delTaskFromImpProj(currItem, currItemInd) {
            if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                projsAndTasks.Important.splice(currItemInd, 1);
                document.querySelector(".important-task-amt").innerText = projsAndTasks.Important.length;
            }
        }
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
    const activePgTitle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("span", null, {id: "active-pg-title"});
    const addNewTaskBtn = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("button", ["Add New Task"], {id: "add-new-task-btn"});
    const activePgHeader = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("header", [activePgTitle, addNewTaskBtn], {id: "active-page-header"});
    const activePgBody = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("div", null, {id: "active-pg-body"});
    const mainEle = _aggregator_js__WEBPACK_IMPORTED_MODULE_0__.shared.createElement("main", [activePgHeader, activePgBody], {id: "main-ele"});
    return mainEle;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainEleArea);

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