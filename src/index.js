import {
    header, aside, mainEle, newProjModal, newTaskModal, invokeListeners
} from "./aggregator.js";

const DOM = (() => {
    const contentDiv = document.getElementById("content");
    contentDiv.append(header, aside, mainEle, newProjModal, newTaskModal);

    const logo = document.getElementById("logo");
    const navLinks = Array.from(document.querySelector("#nav-links").children);
    const asideEleNode = document.getElementById("aside-ele");
    const projListDiv = document.getElementById("proj-list");
    const projCards = projListDiv.children;
    const mainEleNode = document.getElementById("main-ele");
    const activePgTitle = document.getElementById("active-pg-title");
    const activePgBody = document.getElementById("active-pg-body");
    const taskCards = activePgBody.children;

    const newProjModalBg = document.getElementById("new-proj-modal-bg");
    const projModalHeader = document.getElementById("proj-modal-header");
    const closeProjModalBtn = document.getElementById("close-proj-modal");
    const modalBoxProjTitle = document.getElementById("proj-title");
    const cancelProjBtn = document.getElementById("cancel-proj-btn");
    const createProjBtn = document.getElementById("create-proj-btn");

    const newTaskModalBg = document.getElementById("new-task-modal-bg");
    const taskModalHeader = document.getElementById("task-modal-header");
    const closeTaskModalBtn = document.getElementById("close-task-modal");
    const modalBoxTaskTitle = document.getElementById("task-title");
    const modalBoxTaskNote = document.getElementById("task-note");
    const modalBoxTaskDate = document.getElementById("task-date");
    const modalBoxTaskImportance = document.getElementById("task-importance");
    const projDropDown = document.getElementById("proj-dropdown");
    const cancelTaskBtn = document.getElementById("cancel-task-btn");
    const addTaskBtn = document.getElementById("add-task-btn");

    return {
        logo, navLinks, asideEleNode, projListDiv, projCards, mainEleNode, activePgTitle, activePgBody, taskCards,
        newProjModalBg, projModalHeader, closeProjModalBtn, modalBoxProjTitle, cancelProjBtn, createProjBtn,
        newTaskModalBg, taskModalHeader, closeTaskModalBtn, modalBoxTaskTitle, modalBoxTaskNote, modalBoxTaskDate, 
        modalBoxTaskImportance, projDropDown, cancelTaskBtn, addTaskBtn
    }
})();

export default DOM;

invokeListeners();