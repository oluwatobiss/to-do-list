import {
    DOM, projsAndTasks, createTask, isToday, isTomorrow, isThisWeek, startOfWeek, addDays, isSameWeek, parseISO
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

    (event === "windowLoaded" || event === "logoClicked" || event === "projDeleted") ?
        clickedNavLink = "Today"
    :   clickedNavLink = this.querySelector(".nav-link").innerText;

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