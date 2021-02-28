import { shared } from "./aggregator";

const newProjModal = (() => {
  const headerTextSpan = shared.createElement("span", null, {
    id: "proj-modal-header",
  });
  const closeModalSpan = shared.createElement("span", ["x"], {
    id: "close-proj-modal",
    class: "close-modal",
  });
  const headerEle = shared.createElement("header", [
    headerTextSpan,
    closeModalSpan,
  ]);

  const cancelProjBtn = shared.createElement("button", ["Cancel"], {
    type: "button",
    id: "cancel-proj-btn",
  });
  cancelProjBtn.classList.add("modal-btn", "cancel-btn");

  const createProjBtn = shared.createElement("button", null, {
    type: "button",
    id: "create-proj-btn",
  });
  createProjBtn.classList.add("modal-btn", "create-btn");

  const modalBtnDiv = shared.createElement(
    "div",
    [cancelProjBtn, createProjBtn],
    { class: "modal-btns-div" }
  );

  const formLabelEle = shared.createElement("label", ["Name"], {
    for: "proj-title",
  });
  const formInputEle = shared.createElement("input", null, {
    type: "text",
    id: "proj-title",
  });
  const newProjFormEle = shared.createElement("form", [
    formLabelEle,
    formInputEle,
    modalBtnDiv,
  ]);

  const modalBoxBodyDiv = shared.createElement("div", [newProjFormEle], {
    class: "modal-box-body",
  });
  const modalBoxDiv = shared.createElement(
    "div",
    [headerEle, modalBoxBodyDiv],
    { id: "new-proj-modal-box", class: "modal-box" }
  );
  const modalBgSection = shared.createElement("section", [modalBoxDiv], {
    id: "new-proj-modal-bg",
    class: "modal-bg",
  });
  return modalBgSection;
})();

export default newProjModal;
