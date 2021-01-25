import {shared} from "./aggregator.js";

const mainEleArea = (() => {
    const activePgTitle = shared.createElement("span", null, {id: "active-page-title"});
    const addNewTaskBtn = shared.createElement("button", ["Add New Task"], {id: "add-new-task-btn"});
    const activePgHeader = shared.createElement("header", [activePgTitle, addNewTaskBtn], {id: "active-page-header"});
    const activePgBody = shared.createElement("div", null, {id: "active-page-body"});
    const mainEle = shared.createElement("main", [activePgHeader, activePgBody], {id: "main-ele"});
    return mainEle;
})();

export default mainEleArea;

{/* <main>
    <header id="active-page-header">
        <span id="active-page-title">Cook</span>
        <button>Add New Task</button>
    </header>
    <div id="active-page-body">
        <div class="task-card">
            <section class="task-info">
                <input type="checkbox" class="task-done-chkbox">
                <div class="task-and-due-date">
                    <span class="task">Rice</span>
                    <span class="due-date">Due: Fri 24 May . 4 months time</span>
                </div>
                <button><i class="fas fa-star"></i></button>
                <button><i class="fas fa-pen"></i></button>
                <button><i class="fas fa-trash"></i></button>
            </section>
            <section class="task-note">
                <span class="note-header"><strong>Note:</strong></span>
                <span class="note-body">Brainstorm what kind of properties your todo-items are going to have. At a minimum they should have a title, description, dueDate and priority. You might also want to include notes or even a checklist.</span>
            </section>
        </div>
    </div>
</main> */}