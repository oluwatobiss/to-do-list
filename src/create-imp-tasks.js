import { projsAndTasks, createTask } from "./aggregator";

export default () => {
  const keysInProjsAndTasks = Object.keys(projsAndTasks);
  keysInProjsAndTasks.forEach((i) => {
    if (i !== "Important") {
      projsAndTasks[i].forEach(createTaskBasedOnImportancy);
      function createTaskBasedOnImportancy(currItem) {
        if (currItem.important) {
          createTask(currItem);
        }
      }
    }
  });
};
