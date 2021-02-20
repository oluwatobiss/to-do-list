import {projsAndTasks, createTask} from "./aggregator.js";

export default function() {
    for (const prop in projsAndTasks) {
        if (prop !== "Important") {
            projsAndTasks[prop].forEach(createTaskBasedOnImportancy);
            function createTaskBasedOnImportancy(currItem) {
                if (currItem.important) {
                    createTask(currItem);
                }
            }
        }
    }   
}