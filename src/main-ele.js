import {shared} from "./aggregator.js";

const mainEleArea = (() => {
    const activePgTitle = shared.createElement("span", null, {id: "active-pg-title"});
    const addNewTaskBtn = shared.createElement("button", ["Add New Task"], {id: "add-new-task-btn"});
    const activePgHeader = shared.createElement("header", [activePgTitle, addNewTaskBtn], {id: "active-page-header"});
    const activePgBody = shared.createElement("div", null, {id: "active-pg-body"});
    const mainEle = shared.createElement("main", [activePgHeader, activePgBody], {id: "main-ele"});
    return mainEle;
})();

export default mainEleArea;