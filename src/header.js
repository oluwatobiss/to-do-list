import { shared } from "./aggregator";

const headerAreaContent = (() => {
  const logoIconEle = document.createElement("i");
  logoIconEle.classList.add("fas", "fa-list-alt");
  const logoSpanEle = shared.createElement("span", [logoIconEle, " My Plans"]);
  const logoAnchorEle = shared.createElement("a", [logoSpanEle], {
    href: "#",
    id: "logo",
  });

  const ulEle = shared.createElement("ul", null, { id: "nav-links" });
  const menus = ["Today", "Tomorrow", "This Week", "Next Week", "All Tasks"];
  menus.forEach(createMenuLink);
  function createMenuLink(i) {
    const liEle = document.createElement("li");
    const anchorEle = shared.createElement("a", [i], {
      href: "#",
      class: "nav-link",
    });
    liEle.append(anchorEle);
    ulEle.append(liEle);
  }
  const navEle = shared.createElement("nav", [ulEle]);

  const headerEle = shared.createElement("header", [logoAnchorEle, navEle], {
    id: "main-header",
  });
  return headerEle;
})();

export default headerAreaContent;
