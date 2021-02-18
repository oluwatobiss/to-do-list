import {
    shared, DOM, projsAndTasks, createTask, isToday, isTomorrow, isThisWeek, startOfWeek, addDays, isSameWeek, parseISO
} from "./aggregator.js";

export default function(event) {
    const todaysDate = new Date();
    const startOfTodaysWeek = startOfWeek(todaysDate);
    const startOfNextWeek = addDays(startOfTodaysWeek, 7);
    let clickedNavLink = null;

    DOM.navLinks.forEach(i => {
        i.children[0].classList.remove("active-nav");
    });

    for (let i = 0; i < DOM.projCards.length; i++) {
        DOM.projCards[i].classList.remove("active-proj");
    }

    if (event === "windowLoaded" || event === "logoClicked" || event === "projDeleted") {
        clickedNavLink = "Today";
        let projects = null;
        if (event === "windowLoaded" && !localStorage.getItem("myPlans")) {
            projects = ["Important", "Random"];
            createProjCards();
        } else if (event === "windowLoaded" && localStorage.getItem("myPlans")) {
            const projsFromLocStor = localStorage.getItem("myPlans");
            const turnJSONObjToJSObj = JSON.parse(projsFromLocStor);
            Object.assign(projsAndTasks, turnJSONObjToJSObj);

            const locStorProjNames = ["Important", "Random"];
            for (const prop in turnJSONObjToJSObj) {
                if (prop !== "Important" && prop !== "Random") {
                    locStorProjNames.push(prop);
                }
            }
            projects = locStorProjNames;
            createProjCards();
        }

        function createProjCards() {
            for (const val of projects) {                
                const projNameConvert = val.toLowerCase().replace(/\W/g, "-");
                const projNameSpan = shared.createElement("span", [val], {class: "proj-name"});

                let taskAmtSpan = null;
                if (projsAndTasks[val]) {
                    taskAmtSpan = shared.createElement("span", [projsAndTasks[val].length]);
                } else {
                    Object.assign(projsAndTasks, {[val]: []});
                    localStorage.setItem("myPlans", JSON.stringify(projsAndTasks));
                    taskAmtSpan = shared.createElement("span", [projsAndTasks[val].length]);
                }
                taskAmtSpan.classList.add("task-amt", `${projNameConvert}-task-amt`);

                const editIcon = document.createElement("i");
                editIcon.classList.add("fas", "fa-pen");
                const editBtn = shared.createElement("button", [editIcon], {class: "edit-proj-btn", proj: projNameConvert});
            
                const deleteIcon = document.createElement("i");
                deleteIcon.classList.add("fas", "fa-trash");
                const deleteBtn = shared.createElement("button", [deleteIcon], {class: "trash-proj-btn", proj: projNameConvert});
                
                let projDiv = null;
                (val === "Important" || val === "Random") ?
                    projDiv = shared.createElement("div", [projNameSpan, taskAmtSpan], {class: "proj", proj: projNameConvert})
                :   projDiv = shared.createElement("div", [projNameSpan, taskAmtSpan, editBtn, deleteBtn], {class: "proj", proj: projNameConvert});
                DOM.projListDiv.append(projDiv);
        
                if (val !== "Important") {
                    const projOptEle = shared.createElement("option", [val], {id: `${projNameConvert}-proj-opt`});
                    DOM.projDropDown.append(projOptEle);
                }
            }
        }
    } else {
        clickedNavLink = this.querySelector(".nav-link").innerText;
    }

    // Populate the page with the appropraite nav-link's content
    DOM.activePgTitle.innerText = clickedNavLink;

    while (DOM.activePgBody.firstChild) {
        DOM.activePgBody.firstChild.remove();
    }

    if (clickedNavLink === "Today") {
        DOM.navLinks[0].children[0].classList.add("active-nav");
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
        DOM.navLinks[1].children[0].classList.add("active-nav");
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
        DOM.navLinks[2].children[0].classList.add("active-nav");
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
        DOM.navLinks[3].children[0].classList.add("active-nav");
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
        DOM.navLinks[4].children[0].classList.add("active-nav");
        for (const prop in projsAndTasks) {
            if (prop !== "Important") {
                projsAndTasks[prop].forEach(i => createTask(i));
            }
        }
    }
}