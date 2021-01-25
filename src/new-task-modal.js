import {shared} from "./aggregator.js";

const newTaskModal = (() => {
    const headerTextSpan = shared.createElement("span",null, {id: "task-modal-header"});
    const closeModalSpan = shared.createElement("span", ["x"], {id: "close-task-modal", class: "close-modal"});
    const headerEle = shared.createElement("header", [headerTextSpan, closeModalSpan]);
    
    const taskLabelEle = shared.createElement("label", ["Task"], {for: "task-title"});
    const taskInputEle = shared.createElement("input", null, {type: "text", id: "task-title"});
    const taskDiv = shared.createElement("div", [taskLabelEle, taskInputEle], {id: "task"});

    const noteLabelEle = shared.createElement("label", ["Note"], {for: "task-note"});
    const noteTextAreaEle = shared.createElement("textarea", null, {id: "task-note"});
    const noteDiv = shared.createElement("div", [noteLabelEle, noteTextAreaEle], {id: "note"});

    const dueDateLabelEle = shared.createElement("label", ["Due Date"], {for: "task-date"});
    const dueDateInputEle = shared.createElement("input", null, {type: "date", id: "task-date"});
    const dueDateDiv = shared.createElement("div", [dueDateLabelEle, dueDateInputEle], {id: "due-date"});

    const importanceTextSpan = shared.createElement("span", ["Mark as important"]);
    const importanceInputEle = shared.createElement("input", null, {type: "checkbox", id: "task-importance"});
    const importanceLabelEle = shared.createElement("label", [importanceTextSpan, importanceInputEle]);
    const importanceDiv = shared.createElement("div", [importanceLabelEle], {id: "importance"});

    const addToProjLabelEle = shared.createElement("label", ["Add to project"], {for: "proj-dropdown"});
    const addToProjSelectEle = shared.createElement("select", null, {id: "proj-dropdown"});
    const addToProjDiv = shared.createElement("div", [addToProjLabelEle, addToProjSelectEle], {id: "add-to-proj"});

    const cancelTaskBtn = shared.createElement("button", ["Cancel"], {type: "button", id: "cancel-task-btn"});
    cancelTaskBtn.classList.add("modal-btn", "cancel-btn");
    const addTaskBtn = shared.createElement("button", null, {type: "button", id: "add-task-btn"});
    addTaskBtn.classList.add("modal-btn", "create-btn");
    const modalBtnDiv = shared.createElement("div", [cancelTaskBtn, addTaskBtn], {class: "modal-btns-div"});
    
    const newProjFormEle = shared.createElement("form", [taskDiv, noteDiv, dueDateDiv, importanceDiv, addToProjDiv, modalBtnDiv], {id: "new-proj-form"});

    const modalBoxBodyDiv = shared.createElement("div", [newProjFormEle], {class: "modal-box-body"});
    const modalBoxDiv = shared.createElement("div", [headerEle, modalBoxBodyDiv], {id:"new-task-modal-box", class: "modal-box"});
    const modalBgSection = shared.createElement("section", [modalBoxDiv], {id: "new-task-modal-bg", class: "modal-bg"});
    return modalBgSection;
})();

export default newTaskModal;