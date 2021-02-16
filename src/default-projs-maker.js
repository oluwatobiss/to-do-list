import {shared, DOM, projsAndTasks} from "./aggregator.js";

// Create Important and Random projects as the two default projects
export default function() {
    for (const prop in projsAndTasks) {
        if (prop === "Important" || prop === "Random") {
            const projNameConvert = prop.toLowerCase().replace(/\W/g, "-");
            const projNameSpan = shared.createElement("span", [prop], {class: "proj-name"});
    
            const taskAmtSpan = shared.createElement("span", [projsAndTasks[prop].length]);
            taskAmtSpan.classList.add("task-amt", `${projNameConvert}-task-amt`);
            
            const projDiv = shared.createElement("div", [projNameSpan, taskAmtSpan], {class: "proj", proj: projNameConvert});
            DOM.projListDiv.append(projDiv);

            if (prop !== "Important") {
                const projOptEle = shared.createElement("option", [prop]);
                DOM.projDropDown.append(projOptEle);
            }
        }
    }
};