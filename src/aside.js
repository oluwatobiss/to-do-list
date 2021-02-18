import {shared} from "./aggregator.js";

const asideAreaContent = (() => {
    const newProjBtn = shared.createElement("button", ["New Project"], {type: "button", id: "new-proj-btn"});
    const projListDiv = shared.createElement("div", null, {id: "proj-list"});

    const footerIconEle = document.createElement("i");
    footerIconEle.classList.add("fas", "fa-arrow-alt-circle-right");
    const footerAnchorEle = shared.createElement("a", ["Created by Oluwatobi Sofela ", footerIconEle], {href: "https://www.codesweetly.com/", target: "_blank"});
    const footerEle = document.createElement("footer");
    footerEle.append(footerAnchorEle);

    const asideEle = shared.createElement("aside", [newProjBtn, projListDiv, footerEle], {id: "aside-ele"});
    return asideEle;
})();

export default asideAreaContent;