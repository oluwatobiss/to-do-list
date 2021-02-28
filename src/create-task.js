import { shared, DOM, formatDistance, parseISO } from "./aggregator";

export default (taskInfoObj) => {
  const todaysDate = new Date();
  const taskConvert = taskInfoObj.task.toLowerCase().replace(/\W/g, "-");
  const taskDoneInputEle = shared.createElement("input", null, {
    type: "checkbox",
    class: "task-done-chkbox",
  });
  const taskSpan = shared.createElement("span", [taskInfoObj.task]);

  if (taskInfoObj.taskDone) {
    taskDoneInputEle.checked = true;
    taskSpan.classList.add("task", "task-done");
  } else {
    taskDoneInputEle.checked = false;
    taskSpan.classList.add("task");
  }

  const dueDateInWords = new Date(taskInfoObj.dueDate).toDateString();
  const dueDateSpan = shared.createElement("span", null, { class: "due-date" });

  if (taskInfoObj.dueDate) {
    dueDateSpan.append(
      `Due: ${dueDateInWords} • ${formatDistance(
        parseISO(taskInfoObj.dueDate),
        todaysDate,
        { addSuffix: true }
      )}`
    );
  }

  const taskAndDateDiv = shared.createElement("div", [taskSpan, dueDateSpan], {
    class: "task-and-due-date",
  });

  const starIcon = document.createElement("i");
  let starBtn = null;

  if (taskInfoObj.important) {
    starIcon.classList.add("fas", "fa-star", "important-task");
    starBtn = shared.createElement("button", [starIcon], {
      class: "important-btn",
      important: true,
    });
  } else {
    starIcon.classList.add("fas", "fa-star");
    starBtn = shared.createElement("button", [starIcon], {
      class: "important-btn",
      important: false,
    });
  }

  const penIcon = document.createElement("i");
  penIcon.classList.add("fas", "fa-pen");
  const penBtn = shared.createElement("button", [penIcon], {
    class: "edit-task-btn",
  });

  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fas", "fa-trash");
  const trashBtn = shared.createElement("button", [trashIcon], {
    class: "trash-task-btn",
  });

  const taskInfoSecEle = shared.createElement(
    "section",
    [taskDoneInputEle, taskAndDateDiv, starBtn, penBtn, trashBtn],
    { class: "task-info", task: taskConvert }
  );

  const noteStrongEle = shared.createElement("strong", ["Note:"]);
  const noteHeaderSpan = shared.createElement("span", [noteStrongEle], {
    class: "note-header",
  });
  const noteBodySpan = shared.createElement("span", [taskInfoObj.note], {
    class: "note-body",
  });
  const taskProjSpan = shared.createElement("span", null, {
    class: "task-proj",
    taskproj: taskInfoObj.taskProj,
  });
  taskProjSpan.innerHTML = `<strong>Project:</strong> ${taskInfoObj.taskProj}`;
  const taskNoteSecEle = shared.createElement(
    "section",
    [noteHeaderSpan, noteBodySpan, taskProjSpan],
    { class: "task-note" }
  );

  const taskCardDiv = shared.createElement(
    "div",
    [taskInfoSecEle, taskNoteSecEle],
    { class: "task-card" }
  );
  DOM.activePgBody.append(taskCardDiv);
};
