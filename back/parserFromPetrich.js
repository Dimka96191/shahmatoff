let data = [];

function recurcy(element) {
  element.childNodes.forEach((node) => {
    if (node.nodeName.match(/\d/)) {
      const obj = {
        header: node.nodeName,
        content: node.textContent,
      };
      data.push(obj);
    } else {
      recurcy(node);
    }
  });
}
