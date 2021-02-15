import {
    shared, header, aside, mainEle, newProjModal, newTaskModal, isToday, isTomorrow,
    isThisWeek, startOfWeek, addDays, isSameWeek, formatDistance, parseISO
} from "./aggregator.js";

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

const todaysDate = new Date();
const startOfTodaysWeek = startOfWeek(todaysDate);
const startOfNextWeek = addDays(startOfTodaysWeek, 7);

const projsAndTasks = {
    Important: [], 
    Random: []
};

// Create Important and Random projects as the two default projects
(() => {
    for (const prop in projsAndTasks) {
        if (prop === "Important" || prop === "Random") {
            const projNameConvert = prop.toLowerCase().replace(/\W/g, "-");
            const projNameSpan = shared.createElement("span", [prop], {class: "proj-name"});
    
            const taskAmtSpan = shared.createElement("span", [projsAndTasks[prop].length]);
            taskAmtSpan.classList.add("task-amt", `${projNameConvert}-task-amt`);
            
            const projDiv = shared.createElement("div", [projNameSpan, taskAmtSpan], {class: "proj", proj: projNameConvert});
            projListDiv.append(projDiv);

            if (prop !== "Important") {
                const projOptEle = shared.createElement("option", [prop]);
                projDropDown.append(projOptEle);
            }
        }
    }
})();

let clickedProjIndex = null;
let clickedTaskIndex = null;

window.addEventListener("click", closeModal);
window.addEventListener("load", () => displayNavName("windowLoaded"));
logo.addEventListener("click", () => displayNavName("logoClicked"))
navLinks.forEach(i => i.addEventListener("click", displayNavName));
asideEleNode.addEventListener("click", actOnProjEle);
createProjBtn.addEventListener("click", addProjName);
mainEleNode.addEventListener("click", actOnTaskEle);
addTaskBtn.addEventListener("click", addTask);

function closeModal(objClicked) {
    if (objClicked.target === newProjModalBg || objClicked.target === closeProjModalBtn || objClicked.target === cancelProjBtn) {
        closeProjModalBox();
    }
    if (objClicked.target === newTaskModalBg || objClicked.target === closeTaskModalBtn || objClicked.target === cancelTaskBtn) {
        modalBoxTaskTitle.value = "";
        modalBoxTaskNote.value = "";
        modalBoxTaskDate.value = "";
        modalBoxTaskImportance.checked = false;
        newTaskModalBg.style.display = "none";
    }
}

function closeProjModalBox() {
    modalBoxProjTitle.value = "";
    newProjModalBg.style.display = "none";
}

function displayNavName(event) {
    navLinks.forEach(i => {
        i.children[0].classList.remove("active-nav");
    });

    for (let i = 0; i < projCards.length; i++) {
        projCards[i].classList.remove("active-proj");
    }

    let clickedNavLink = null;

    if (event === "windowLoaded" || event === "logoClicked" || event === "projDeleted") {
        clickedNavLink = "Today";
    } else {
        clickedNavLink = this.querySelector(".nav-link").innerText;
    }

    activePgTitle.innerText = clickedNavLink;

    while (activePgBody.firstChild) {
        activePgBody.firstChild.remove();
    }

    if (clickedNavLink === "Today") {
        navLinks[0].children[0].classList.add("active-nav");
        for (const prop in projsAndTasks) {
            if (prop !== "Important") {
                projsAndTasks[prop].forEach(showTodaysTask);
                function showTodaysTask(task) {
                    if (isToday(parseISO(task.dueDate))) {
                        createTask(task);
                    }
                }
            }
        }
    }

    if (clickedNavLink === "Tomorrow") {
        navLinks[1].children[0].classList.add("active-nav");
        for (const prop in projsAndTasks) {
            if (prop !== "Important") {
                projsAndTasks[prop].forEach(showTomorrowsTask);
                function showTomorrowsTask(task) {
                    if (isTomorrow(parseISO(task.dueDate))) {
                        createTask(task);
                    }
                }
            }
        }
    }

    if (clickedNavLink === "This Week") {
        navLinks[2].children[0].classList.add("active-nav");
        for (const prop in projsAndTasks) {
            if (prop !== "Important") {
                projsAndTasks[prop].forEach(showThisWeeksTask);
                function showThisWeeksTask(task) {
                    if (isThisWeek(parseISO(task.dueDate))) {
                        createTask(task);
                    }
                }
            }
        }
    }

    if (clickedNavLink === "Next Week") {
        navLinks[3].children[0].classList.add("active-nav");
        for (const prop in projsAndTasks) {
            if (prop !== "Important") {
                projsAndTasks[prop].forEach(showNextWeeksTask);
                function showNextWeeksTask(task) {
                    if (isSameWeek(parseISO(task.dueDate), startOfNextWeek)) {
                        createTask(task);
                    }
                }
            }
        }
    }

    if (clickedNavLink === "All Tasks") {
        navLinks[4].children[0].classList.add("active-nav");
        for (const prop in projsAndTasks) {
            if (prop !== "Important") {
                projsAndTasks[prop].forEach(i => createTask(i));
            }
        }
    }
}

function createTask(taskInfoObj) {
    const taskConvert = taskInfoObj.task.toLowerCase().replace(/\W/g, "-");
    const taskDoneInputEle = shared.createElement("input", null, {type: "checkbox", class: "task-done-chkbox"});
    const taskSpan = shared.createElement("span", [taskInfoObj.task]);

    if (taskInfoObj.taskDone) {
        taskDoneInputEle.checked = true;
        taskSpan.classList.add("task", "task-done");
    } else {
        taskDoneInputEle.checked = false;
        taskSpan.classList.add("task");
    }

    const dueDateInWords = new Date(taskInfoObj.dueDate).toDateString();
    const dueDateSpan = shared.createElement("span", null, {class: "due-date"});

    if (taskInfoObj.dueDate) {
        dueDateSpan.append(`Due: ${dueDateInWords} • ${formatDistance(parseISO(taskInfoObj.dueDate), todaysDate, {addSuffix: true})}`);
    }

    const taskAndDateDiv = shared.createElement("div", [taskSpan, dueDateSpan], {class: "task-and-due-date"});

    const starIcon = document.createElement("i");
    let starBtn = null;

    if (taskInfoObj.important) {
        starIcon.classList.add("fas", "fa-star", "important-task");
        starBtn = shared.createElement("button", [starIcon], {class: "important-btn", important: true});
    } else {
        starIcon.classList.add("fas", "fa-star");
        starBtn = shared.createElement("button", [starIcon], {class: "important-btn", important: false});
    }

    const penIcon = document.createElement("i");
    penIcon.classList.add("fas", "fa-pen");
    const penBtn =  shared.createElement("button", [penIcon], {class: "edit-task-btn"});

    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fas", "fa-trash");
    const trashBtn = shared.createElement("button", [trashIcon], {class: "trash-task-btn"});

    const taskInfoSecEle = shared.createElement("section", [taskDoneInputEle, taskAndDateDiv, starBtn, penBtn, trashBtn], {class: "task-info", task: taskConvert});
    
    const noteStrongEle =shared.createElement("strong", ["Note:"]);
    const noteHeaderSpan = shared.createElement("span", [noteStrongEle], {class: "note-header"});
    const noteBodySpan = shared.createElement("span", [taskInfoObj.note], {class: "note-body"});
    const taskProjSpan = shared.createElement("span", null, {class: "task-proj", taskproj: taskInfoObj.taskProj});
    taskProjSpan.innerHTML = `<strong>Project:</strong> ${taskInfoObj.taskProj}`;
    const taskNoteSecEle = shared.createElement("section", [noteHeaderSpan, noteBodySpan, taskProjSpan], {class: "task-note"});

    const taskCardDiv = shared.createElement("div", [taskInfoSecEle, taskNoteSecEle], {class: "task-card"});
    activePgBody.append(taskCardDiv);
}

function actOnProjEle(objClicked) {
    const newProjBtn = objClicked.target.closest("#new-proj-btn");
    const projModalHeader = document.getElementById("proj-modal-header");
    const projDiv = objClicked.target.closest(".proj");
    const editProjBtn = objClicked.target.closest(".edit-proj-btn");
    const trashProjBtn = objClicked.target.closest(".trash-proj-btn");

    if (newProjBtn) {
        projModalHeader.innerText = "New Project";
        createProjBtn.innerText = "Create Project";
        showNewProjModal();
    }

    if (projDiv) {
        navLinks.forEach(i => {
            i.children[0].classList.remove("active-nav");
        });

        for (let i = 0; i < projCards.length; i++) {
            projCards[i].classList.remove("active-proj");
            const projName = projCards[i].firstElementChild.innerText;
            const projNameConvert = projName.toLowerCase().replace(/\W/g, "-");
            if (projDiv.getAttribute("proj") === projNameConvert) {
                const clickedProjCard = projCards[i];
                clickedProjCard.classList.add("active-proj");
                activePgTitle.innerText = projName;
                while (activePgBody.firstChild) {
                    activePgBody.firstChild.remove();
                }
                projsAndTasks[projName].forEach(i => createTask(i));
            }
        }
    }

    if (editProjBtn) {
        projModalHeader.innerText = "Edit Project";
        createProjBtn.innerText = "Update Project";
        for (let i = 0; i < projCards.length; i++) {
            const projName = projCards[i].firstElementChild.innerText;
            const projNameConvert = projName.toLowerCase().replace(/\W/g, "-");
            if (editProjBtn.getAttribute("proj") === projNameConvert) {
                modalBoxProjTitle.value = projName;
                clickedProjIndex = i;
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
                projsAndTasks[clickedProjName].forEach(checkIfTaskIsImp);
                projDropDown.querySelector(`#${projNameConvert}-proj-opt`).remove();
                delete projsAndTasks[clickedProjName];
                clickedProjCard.remove();
                displayNavName("projDeleted");
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
        newProjModalBg.style.display = "block";
    }
}

function addProjName() {
    if (!modalBoxProjTitle.value) {
        alert("Error: Name field must not be blank. Please provide a project name.");
    } else {
        if (createProjBtn.innerText === "Create Project" && !checkIfNameExist()) {
            Object.assign(projsAndTasks, {[modalBoxProjTitle.value]: []});
            createProj(modalBoxProjTitle.value);
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
                projListDiv.append(projDiv);
            
                const projOptEle = shared.createElement("option", [projName], {id: `${projNameConvert}-proj-opt`});
                projDropDown.append(projOptEle);
            
                closeProjModalBox();
            }
        } else if (createProjBtn.innerText === "Update Project" && !checkIfNameExist()) {
            const currProjName = projCards[clickedProjIndex].querySelector(".proj-name").innerText;
            const currprojNameConvert = currProjName.toLowerCase().replace(/\W/g, "-");

            const newProjName = modalBoxProjTitle.value;
            const newprojNameConvert = newProjName.toLowerCase().replace(/\W/g, "-");

            const projOptEle = shared.createElement("option", [newProjName], {id: `${newprojNameConvert}-proj-opt`});
            projDropDown.querySelector(`#${currprojNameConvert}-proj-opt`).replaceWith(projOptEle);

            // Replace project name and attributes in the name span, amount span, edit button, and trash button
            projCards[clickedProjIndex].setAttribute("proj", newprojNameConvert);
            projCards[clickedProjIndex].querySelector(".proj-name").innerText = newProjName;
            projCards[clickedProjIndex].querySelector(".task-amt").classList.add(`${newprojNameConvert}-task-amt`);
            projCards[clickedProjIndex].querySelector(".task-amt").classList.remove(`${currprojNameConvert}-task-amt`);
            projCards[clickedProjIndex].querySelector(".edit-proj-btn").setAttribute("proj", newprojNameConvert);
            projCards[clickedProjIndex].querySelector(".trash-proj-btn").setAttribute("proj", newprojNameConvert);

            // Transfer the content of the old project object to the new project object and delete the old project object
            projsAndTasks[newProjName] = projsAndTasks[currProjName];
            delete projsAndTasks[currProjName];

            if (activePgTitle.innerText === currProjName) {
                activePgTitle.innerText = newProjName;
            }
            closeProjModalBox();
        }
        function checkIfNameExist() {
            for (const prop in projsAndTasks) {
                if (prop.toLowerCase() === modalBoxProjTitle.value.toLowerCase()) {
                    alert("Error: A project already exist with that name. Please choose a different project name.");
                    return true;
                }
            }
        }
    }
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
                    
                    if (
                        ((activePgTitle.innerText === "Today") && isToday(parseISO(taskInfo.dueDate))) ||
                        ((activePgTitle.innerText === "Tomorrow") && isTomorrow(parseISO(taskInfo.dueDate))) ||
                        ((activePgTitle.innerText === "This Week") && isThisWeek(parseISO(taskInfo.dueDate))) ||
                        ((activePgTitle.innerText === "Next Week") && isSameWeek(parseISO(taskInfo.dueDate), startOfNextWeek)) ||
                        activePgTitle.innerText === "All Tasks" ||
                        activePgTitle.innerText === projDropDown.value ||
                        ((activePgTitle.innerText === "Important") && taskInfo.important)
                        ) {
                        createTask(taskInfo);
                    }
                }
            }
        } else {
            for (const prop in projsAndTasks) {
                // Find the selected project
                if (prop === projDropDown.value) {
                    const clickedTaskCard = taskCards[clickedTaskIndex];
                    const clickedTaskChkBox = clickedTaskCard.querySelector(".task-done-chkbox");
                    const clickedTaskImportance = clickedTaskCard.querySelector(".important-btn").getAttribute("important");
                    const clickedTaskProjName = clickedTaskCard.querySelector(".task-proj").getAttribute("taskproj");
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
                            const removedTask = projsAndTasks[clickedTaskProjName].splice(clickedTaskIndex, 1);
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
    
                        if (
                            activePgTitle.innerText === "Today" ||
                            activePgTitle.innerText === "Tomorrow" ||
                            activePgTitle.innerText === "This Week" ||
                            activePgTitle.innerText === "Next Week" ||
                            activePgTitle.innerText === "All Tasks"
                            ) {
                            for (const prop in projsAndTasks) {
                                if (prop !== "Important") {
                                    projsAndTasks[prop].forEach(createTaskBasedOnNavClicked);

                                    function createTaskBasedOnNavClicked(currItem) {
                                        if (
                                            (activePgTitle.innerText === "Today" && isToday(parseISO(currItem.dueDate))) ||
                                            (activePgTitle.innerText === "Tomorrow" && isTomorrow(parseISO(currItem.dueDate))) ||
                                            (activePgTitle.innerText === "This Week" && isThisWeek(parseISO(currItem.dueDate))) ||
                                            (activePgTitle.innerText === "Next Week" && isSameWeek(parseISO(currItem.dueDate), startOfNextWeek)) ||
                                            activePgTitle.innerText === "All Tasks"
                                            ) {
                                            createTask(currItem);
                                        }
                                    }
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

function actOnTaskEle(objClicked) {
    const addNewTaskBtn = objClicked.target.closest("#add-new-task-btn");
    const taskModalHeader = document.getElementById("task-modal-header");
    const taskDoneChkBox = objClicked.target.closest(".task-done-chkbox");
    const taskAndDueDateDiv = objClicked.target.closest(".task-and-due-date");
    const starIcon = objClicked.target.closest(".fa-star");
    const editTaskBtn = objClicked.target.closest(".edit-task-btn");
    const trashTaskBtn = objClicked.target.closest(".trash-task-btn");

    if (addNewTaskBtn) {
        const projOptsArr = Array.from(projDropDown.children);
        taskModalHeader.innerText = "New Task";
        addTaskBtn.innerText = "Add Task";

        // Pre-choose the project to which the new task should be added
        if (projOptsArr.some(i => i.value === activePgTitle.innerText)) {
            const activePgProjOptIndex = projOptsArr.findIndex((i) => i.value === activePgTitle.innerText);
            projDropDown.children[activePgProjOptIndex].selected = true;
        } else {
            projDropDown.children[0].selected = true;
        }

        showNewTaskModal();
    }

    if (taskDoneChkBox) {
        getClickedTaskIndex(taskDoneChkBox);
        const clickedTaskCard = taskCards[clickedTaskIndex];
        const clickedTaskProjName = clickedTaskCard.querySelector(".task-proj").getAttribute("taskproj");
        const clickedCardTask = clickedTaskCard.querySelector(".task");
        const clickedTaskTitle = clickedCardTask.innerText;

        // Toggle the task-done's class state and the taskDone property state
        clickedCardTask.classList.toggle("task-done");
        if (taskDoneChkBox.checked) {
            projsAndTasks[clickedTaskProjName].forEach(changeTaskDoneToTrue);
            function changeTaskDoneToTrue(currItem, currItemInd) {
                if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                    projsAndTasks[clickedTaskProjName][currItemInd].taskDone = true;
                }
            }
        } else {
            projsAndTasks[clickedTaskProjName].forEach(changeTaskDoneToFalse);
            function changeTaskDoneToFalse(currItem, currItemInd) {
                if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                    projsAndTasks[clickedTaskProjName][currItemInd].taskDone = false;
                }
            }
        }
    }

    if (taskAndDueDateDiv) {
        getClickedTaskIndex(taskAndDueDateDiv);
        const clickedCardNote = taskCards[clickedTaskIndex].querySelector(".task-note");
        if (clickedCardNote.style.display === "") {
            clickedCardNote.style.display = "grid";
        } else {
            clickedCardNote.style.display = "";
        }
    }

    if (starIcon) {
        getClickedTaskIndex(starIcon.closest("button"));
        const clickedTaskCard = taskCards[clickedTaskIndex];
        const clickedTaskProjName = clickedTaskCard.querySelector(".task-proj").getAttribute("taskproj");
        const clickedTaskTitle = clickedTaskCard.querySelector(".task").innerText;

        starIcon.classList.toggle("important-task");

        if (activePgTitle.innerText === "Important") {
            projsAndTasks[clickedTaskProjName].forEach(changeImpToFalse);
            projsAndTasks.Important.forEach(delTaskFromImpProj);
            while (activePgBody.firstChild) {
                activePgBody.firstChild.remove();
            }
            projsAndTasks.Important.forEach(i => createTask(i));
            function changeImpToFalse(currItem, currItemInd) {
                if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                    projsAndTasks[clickedTaskProjName][currItemInd].important = false;
                    clickedTaskCard.querySelector(".important-btn").setAttribute("important", false);
                }
            }
        }

        if (activePgTitle.innerText !== "Important") {
            if (
                activePgTitle.innerText === "Today" ||
                activePgTitle.innerText === "Tomorrow" ||
                activePgTitle.innerText === "This Week" ||
                activePgTitle.innerText === "Next Week" ||
                activePgTitle.innerText === "All Tasks"
                ) {
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
                if (projsAndTasks[clickedTaskProjName][clickedTaskIndex].important) {
                    projsAndTasks[clickedTaskProjName][clickedTaskIndex].important = false;
                    clickedTaskCard.querySelector(".important-btn").setAttribute("important", false);
                    projsAndTasks.Important.forEach(delTaskFromImpProj);
                } else {
                    projsAndTasks[clickedTaskProjName][clickedTaskIndex].important = true;
                    clickedTaskCard.querySelector(".important-btn").setAttribute("important", true);
                    projsAndTasks.Important.push(projsAndTasks[clickedTaskProjName][clickedTaskIndex]);
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
        getClickedTaskIndex(editTaskBtn.closest("button"));
        const projOptsArr = Array.from(projDropDown.children);
        const clickedTaskCard = taskCards[clickedTaskIndex];
        const clickedTaskTitle = clickedTaskCard.querySelector(".task").innerText;
        const clickedTaskProjName = clickedTaskCard.querySelector(".task-proj").getAttribute("taskproj");

        taskModalHeader.innerText = "Edit Task";
        addTaskBtn.innerText = "Update Task";

        if (
            activePgTitle.innerText === "Today" ||
            activePgTitle.innerText === "Tomorrow" ||
            activePgTitle.innerText === "This Week" ||
            activePgTitle.innerText === "Next Week" ||
            activePgTitle.innerText === "All Tasks"
            ) {
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
            modalBoxTaskTitle.value = projsAndTasks[activePgTitle.innerText][clickedTaskIndex].task;
            modalBoxTaskNote.value = projsAndTasks[activePgTitle.innerText][clickedTaskIndex].note;
            modalBoxTaskDate.value = projsAndTasks[activePgTitle.innerText][clickedTaskIndex].dueDate;
            modalBoxTaskImportance.checked = projsAndTasks[activePgTitle.innerText][clickedTaskIndex].important;
        }

        if (projOptsArr.some(i => i.value === clickedTaskProjName)) {
            const activePgProjOptIndex = projOptsArr.findIndex((i) => i.value === clickedTaskProjName);
            projDropDown.children[activePgProjOptIndex].selected = true;
        }

        showNewTaskModal();
    }

    if (trashTaskBtn) {
        getClickedTaskIndex(trashTaskBtn.closest("button"));
        const clickedTaskCard = taskCards[clickedTaskIndex];
        const clickedTaskTitle = clickedTaskCard.querySelector(".task").innerText;
        const clickedTaskProjName = clickedTaskCard.querySelector(".task-proj").getAttribute("taskproj");
        const clickedTaskProjNameConvert = clickedTaskProjName.toLowerCase().replace(/\W/g, "-");

        if (activePgTitle.innerText !== "Important") {
            if (
                activePgTitle.innerText === "Today" ||
                activePgTitle.innerText === "Tomorrow" ||
                activePgTitle.innerText === "This Week" ||
                activePgTitle.innerText === "Next Week" ||
                activePgTitle.innerText === "All Tasks"
                ) {
                // Find the clicked task in the projsAndTasks object and delete it
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
                // Delete the clicked task from the projsAndTasks object
                projsAndTasks[clickedTaskProjName].splice(clickedTaskIndex, 1);
                if (projsAndTasks[clickedTaskProjName][clickedTaskIndex].important) {
                    projsAndTasks.Important.forEach(delTaskFromImpProj);
                }
            }
        }

        if (activePgTitle.innerText === "Important") {
            // Find the clicked task in the projsAndTasks object and delete it
            projsAndTasks.Important.forEach(delTaskFromImpProj);
            for (let i = 0; i < projsAndTasks[clickedTaskProjName].length; i++) {
                const currItem = projsAndTasks[clickedTaskProjName][i];
                if (currItem.taskProj === clickedTaskProjName && currItem.task === clickedTaskTitle) {
                    projsAndTasks[clickedTaskProjName].splice(i, 1);
                }
            }
        }

        // Update the displayed number of tasks in the deleted task's project
        document.querySelector(`.${clickedTaskProjNameConvert}-task-amt`).innerText = projsAndTasks[clickedTaskProjName].length;

        while (activePgBody.firstChild) {
            activePgBody.firstChild.remove();
        }

        if (activePgTitle.innerText === "Important") {
            projsAndTasks.Important.forEach(i => createTask(i));
        } else if (
            activePgTitle.innerText === "Today" ||
            activePgTitle.innerText === "Tomorrow" ||
            activePgTitle.innerText === "This Week" ||
            activePgTitle.innerText === "Next Week" ||
            activePgTitle.innerText === "All Tasks"
            ) {
                for (const prop in projsAndTasks) {
                    if (prop !== "Important") {
                        projsAndTasks[prop].forEach(createTaskBasedOnNavClicked);
                        function createTaskBasedOnNavClicked(currItem) {
                            if (
                                (activePgTitle.innerText === "Today" && isToday(parseISO(currItem.dueDate))) ||
                                (activePgTitle.innerText === "Tomorrow" && isTomorrow(parseISO(currItem.dueDate))) ||
                                (activePgTitle.innerText === "This Week" && isThisWeek(parseISO(currItem.dueDate))) ||
                                (activePgTitle.innerText === "Next Week" && isSameWeek(parseISO(currItem.dueDate), startOfNextWeek)) ||
                                activePgTitle.innerText === "All Tasks"
                                ) {
                                createTask(currItem);
                            }
                        }
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

    function showNewTaskModal() {
        newTaskModalBg.style.display = "block";
    }

    function getClickedTaskIndex(clickedEle) {
        for (let i = 0; i < taskCards.length; i++) {
            const task = taskCards[i].querySelector(".task").innerText;
            const taskConvert = task.toLowerCase().replace(/\W/g, "-");
            if (clickedEle.parentNode.getAttribute("task") === taskConvert) {
                clickedTaskIndex = i;
            }
        }
    }
}