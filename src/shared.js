const shared = (() => ({
  createElement(eleType, node, attr) {
    const element = document.createElement(eleType);
    if (node) {
      node.forEach((i) => element.append(i));
    }
    if (attr) {
      const keysInAttr = Object.keys(attr);
      keysInAttr.forEach((i) => {
        element.setAttribute(i, attr[i]);
      });
    }
    return element;
  },
}))();

export default shared;
