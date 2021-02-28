import {
  shared,
  DOM,
  projsAndTasks,
  createTask,
  isToday,
  isTomorrow,
  isThisWeek,
  startOfWeek,
  addDays,
  isSameWeek,
  parseISO,
} from "./aggregator";

export default (event) => {
  const todaysDate = new Date();
  const startOfTodaysWeek = startOfWeek(todaysDate);
  const startOfNextWeek = addDays(startOfTodaysWeek, 7);
  let clickedNavLink = null;

  DOM.navLinks.forEach((i) => {
    i.children[0].classList.remove("active-nav");
  });

  for (let i = 0; i < DOM.projCards.length; i++) {
    DOM.projCards[i].classList.remove("active-proj");
  }

  if (
    event === "windowLoaded" ||
    event === "logoClicked" ||
    event === "projDeleted"
  ) {
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
      const propsInTurnJSONObjToJSObj = Object.keys(turnJSONObjToJSObj);
      propsInTurnJSONObjToJSObj.forEach((i) => {
        if (i !== "Important" && i !== "Random") {
          locStorProjNames.push(i);
        }
      });
      projects = locStorProjNames;
      createProjCards();
    }

    function createProjCards() {
      projects.forEach((i) => {
        const projNameConvert = i.toLowerCase().replace(/\W/g, "-");
        const projNameSpan = shared.createElement("span", [i], {
          class: "proj-name",
        });

        let taskAmtSpan = null;
        // If i exist in projsAndTasks, just initilize taskAmtSpan. Otherwise,
        // first assign a i property to projsAndTasks; then, initilize taskAmtSpan.
        if (projsAndTasks[i]) {
          i === "Important"
            ? (taskAmtSpan = shared.createElement("span", [projsAndTasks[i]]))
            : (taskAmtSpan = shared.createElement("span", [
                projsAndTasks[i].length,
              ]));
        } else {
          if (i === "Important") {
            Object.assign(projsAndTasks, { [i]: 0 });
            taskAmtSpan = shared.createElement("span", [projsAndTasks[i]]);
          } else {
            Object.assign(projsAndTasks, { [i]: [] });
            taskAmtSpan = shared.createElement("span", [
              projsAndTasks[i].length,
            ]);
          }
          localStorage.setItem("myPlans", JSON.stringify(projsAndTasks));
        }
        taskAmtSpan.classList.add("task-amt", `${projNameConvert}-task-amt`);

        const editIcon = document.createElement("i");
        editIcon.classList.add("fas", "fa-pen");
        const editBtn = shared.createElement("button", [editIcon], {
          class: "edit-proj-btn",
          proj: projNameConvert,
        });

        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fas", "fa-trash");
        const deleteBtn = shared.createElement("button", [deleteIcon], {
          class: "trash-proj-btn",
          proj: projNameConvert,
        });

        let projDiv = null;
        i === "Important" || i === "Random"
          ? (projDiv = shared.createElement(
              "div",
              [projNameSpan, taskAmtSpan],
              { class: "proj", proj: projNameConvert }
            ))
          : (projDiv = shared.createElement(
              "div",
              [projNameSpan, taskAmtSpan, editBtn, deleteBtn],
              { class: "proj", proj: projNameConvert }
            ));
        DOM.projListDiv.append(projDiv);

        if (i !== "Important") {
          const projOptEle = shared.createElement("option", [i], {
            id: `${projNameConvert}-proj-opt`,
          });
          DOM.projDropDown.append(projOptEle);
        }
      });
    }
  } else {
    clickedNavLink = event.target.innerText;
  }

  // Populate the page with the appropraite nav-link's content
  const keysInProjsAndTasks = Object.keys(projsAndTasks);
  DOM.activePgTitle.innerText = clickedNavLink;

  while (DOM.activePgBody.firstChild) {
    DOM.activePgBody.firstChild.remove();
  }

  if (clickedNavLink === "Today") {
    DOM.navLinks[0].children[0].classList.add("active-nav");
    keysInProjsAndTasks.forEach((i) => {
      if (i !== "Important") {
        projsAndTasks[i].forEach(showTodaysTask);
        function showTodaysTask(task) {
          if (isToday(parseISO(task.dueDate))) {
            createTask(task);
          }
        }
      }
    });
  }

  if (clickedNavLink === "Tomorrow") {
    DOM.navLinks[1].children[0].classList.add("active-nav");
    keysInProjsAndTasks.forEach((i) => {
      if (i !== "Important") {
        projsAndTasks[i].forEach(showTomorrowsTask);
        function showTomorrowsTask(task) {
          if (isTomorrow(parseISO(task.dueDate))) {
            createTask(task);
          }
        }
      }
    });
  }

  if (clickedNavLink === "This Week") {
    DOM.navLinks[2].children[0].classList.add("active-nav");
    keysInProjsAndTasks.forEach((i) => {
      if (i !== "Important") {
        projsAndTasks[i].forEach(showThisWeeksTask);
        function showThisWeeksTask(task) {
          if (isThisWeek(parseISO(task.dueDate))) {
            createTask(task);
          }
        }
      }
    });
  }

  if (clickedNavLink === "Next Week") {
    DOM.navLinks[3].children[0].classList.add("active-nav");
    keysInProjsAndTasks.forEach((i) => {
      if (i !== "Important") {
        projsAndTasks[i].forEach(showNextWeeksTask);
        function showNextWeeksTask(task) {
          if (isSameWeek(parseISO(task.dueDate), startOfNextWeek)) {
            createTask(task);
          }
        }
      }
    });
  }

  if (clickedNavLink === "All Tasks") {
    DOM.navLinks[4].children[0].classList.add("active-nav");
    keysInProjsAndTasks.forEach((i) => {
      if (i !== "Important") {
        projsAndTasks[i].forEach((t) => createTask(t));
      }
    });
  }
};
