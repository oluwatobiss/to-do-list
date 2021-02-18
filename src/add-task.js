import {
    DOM, projsAndTasks, createTask, clickedTaskIndex, isToday, isTomorrow, 
    isThisWeek, startOfWeek, addDays, isSameWeek, parseISO
} from "./aggregator.js";

export default function() {
    const todaysDate = new Date();
    const startOfTodaysWeek = startOfWeek(todaysDate);
    const startOfNextWeek = addDays(startOfTodaysWeek, 7);

    if (!DOM.modalBoxTaskTitle.value) {
        alert("Error: Task field must not be blank. Please write a task.");
    } else {
        if (DOM.addTaskBtn.innerText === "Add Task") {
            for (const prop in projsAndTasks) {
                if (prop === DOM.projDropDown.value) {
                    const projNameConvert = prop.toLowerCase().replace(/\W/g, "-");
                    const taskInfo = {
                        taskProj: prop,
                        taskDone: false,
                        task: DOM.modalBoxTaskTitle.value,
                        note: DOM.modalBoxTaskNote.value,
                        dueDate: DOM.modalBoxTaskDate.value,
                        important: DOM.modalBoxTaskImportance.checked
                    };
    
                    projsAndTasks[prop].push(taskInfo);

                    if (taskInfo.important) {
                        projsAndTasks.Important.push(taskInfo);
                        document.querySelector(".important-task-amt").innerText = projsAndTasks.Important.length;
                    }
                    
                    document.querySelector(`.${projNameConvert}-task-amt`).innerText = projsAndTasks[prop].length;
                    localStorage.setItem("myPlans", JSON.stringify(projsAndTasks));
                    
                    if (
                        ((DOM.activePgTitle.innerText === "Today") && isToday(parseISO(taskInfo.dueDate))) ||
                        ((DOM.activePgTitle.innerText === "Tomorrow") && isTomorrow(parseISO(taskInfo.dueDate))) ||
                        ((DOM.activePgTitle.innerText === "This Week") && isThisWeek(parseISO(taskInfo.dueDate))) ||
                        ((DOM.activePgTitle.innerText === "Next Week") && isSameWeek(parseISO(taskInfo.dueDate), startOfNextWeek)) ||
                        DOM.activePgTitle.innerText === "All Tasks" ||
                        DOM.activePgTitle.innerText === DOM.projDropDown.value ||
                        ((DOM.activePgTitle.innerText === "Important") && taskInfo.important)
                        ) {
                        createTask(taskInfo);
                    }
                }
            }
        } else {
            for (const prop in projsAndTasks) {
                // Find the selected project
                if (prop === DOM.projDropDown.value) {
                    const clickedTaskCard = DOM.taskCards[clickedTaskIndex];
                    const clickedTaskChkBox = clickedTaskCard.querySelector(".task-done-chkbox");
                    const clickedTaskImportance = clickedTaskCard.querySelector(".important-btn").getAttribute("important");
                    const clickedTaskProjName = clickedTaskCard.querySelector(".task-proj").getAttribute("taskproj");
                    const clickedTaskTitle = clickedTaskCard.querySelector(".task").innerText;
                    // Store the new task details
                    const taskInfo = {
                        taskProj: prop,
                        taskDone: clickedTaskChkBox.checked,
                        task: DOM.modalBoxTaskTitle.value,
                        note: DOM.modalBoxTaskNote.value,
                        dueDate: DOM.modalBoxTaskDate.value,
                        important: DOM.modalBoxTaskImportance.checked
                    };

                    if (clickedTaskImportance === "true" && taskInfo.important === true) {
                        projsAndTasks.Important.forEach(updateTask);
                        projsAndTasks[clickedTaskProjName].forEach(updateTask);
                    } else if (clickedTaskImportance === "true" && taskInfo.important === false) {
                        projsAndTasks.Important.forEach(delTaskFromImpProj);
                        projsAndTasks[clickedTaskProjName].forEach(updateTask);
                    } else if (clickedTaskImportance === "false" && taskInfo.important === true) {
                        projsAndTasks.Important.push(taskInfo);
                        document.querySelector(".important-task-amt").innerText = projsAndTasks.Important.length;
                        projsAndTasks[clickedTaskProjName].forEach(updateTask);
                    } else if (clickedTaskImportance === "false" && taskInfo.important === false) {
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
                    if (clickedTaskProjName !== DOM.projDropDown.value) {
                        // Move updated task to the selected project
                        if (DOM.activePgTitle.innerText === clickedTaskProjName) {
                            const removedTask = projsAndTasks[clickedTaskProjName].splice(clickedTaskIndex, 1);
                            projsAndTasks[DOM.projDropDown.value].push(removedTask[0]);
                        } else {
                            projsAndTasks[clickedTaskProjName].forEach(relocateUpdatedTask);
                            function relocateUpdatedTask(currItem, currItemInd) {
                                if (currItem.taskProj === DOM.projDropDown.value && currItem.task === clickedTaskTitle) {
                                    const removedTask = projsAndTasks[clickedTaskProjName].splice(currItemInd, 1);
                                    projsAndTasks[DOM.projDropDown.value].push(removedTask[0]);
                                }
                            }
                        }

                        // Update the clicked task's current project's task amount
                        const clickedTaskprojNameConvert = clickedTaskProjName.toLowerCase().replace(/\W/g, "-");
                        document.querySelector(`.${clickedTaskprojNameConvert}-task-amt`).innerText = projsAndTasks[clickedTaskProjName].length;

                        // Update the selected project's task amount
                        const projDropDownConvert = DOM.projDropDown.value.toLowerCase().replace(/\W/g, "-");
                        document.querySelector(`.${projDropDownConvert}-task-amt`).innerText = projsAndTasks[DOM.projDropDown.value].length;
                    }

                    // Update the localStorage and the content displayed onscreen
                    localStorage.setItem("myPlans", JSON.stringify(projsAndTasks));
                    while (DOM.activePgBody.firstChild) {
                        DOM.activePgBody.firstChild.remove();
                    }
                    if (
                        DOM.activePgTitle.innerText === "Today" ||
                        DOM.activePgTitle.innerText === "Tomorrow" ||
                        DOM.activePgTitle.innerText === "This Week" ||
                        DOM.activePgTitle.innerText === "Next Week" ||
                        DOM.activePgTitle.innerText === "All Tasks"
                        ) {
                        for (const prop in projsAndTasks) {
                            if (prop !== "Important") {
                                projsAndTasks[prop].forEach(createTaskBasedOnNavClicked);
                                function createTaskBasedOnNavClicked(currItem) {
                                    if (
                                        (DOM.activePgTitle.innerText === "Today" && isToday(parseISO(currItem.dueDate))) ||
                                        (DOM.activePgTitle.innerText === "Tomorrow" && isTomorrow(parseISO(currItem.dueDate))) ||
                                        (DOM.activePgTitle.innerText === "This Week" && isThisWeek(parseISO(currItem.dueDate))) ||
                                        (DOM.activePgTitle.innerText === "Next Week" && isSameWeek(parseISO(currItem.dueDate), startOfNextWeek)) ||
                                        DOM.activePgTitle.innerText === "All Tasks"
                                        ) {
                                        createTask(currItem);
                                    }
                                }
                            }
                        }
                    } else {
                        projsAndTasks[DOM.activePgTitle.innerText].forEach(i => createTask(i));
                    }
                }
            }
        }
        DOM.modalBoxTaskTitle.value = "";
        DOM.modalBoxTaskNote.value = "";
        DOM.modalBoxTaskDate.value = "";
        DOM.modalBoxTaskImportance.checked = false;
        DOM.newTaskModalBg.style.display = "none";
    }
}