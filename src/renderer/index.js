const Reconciler = require("react-reconciler");

const HostConfig = {
  //TODO We will specify all required methods here
};
const reconcilerInstance = Reconciler(HostConfig);

const CustomRenderer = {
  render(element, renderDom, callback) {
    // element: This is the react element for App component
    // renderDom: This is the host root element to which the rendered app will be attached.
    // callback: if specified will be called after render is done.

    const isAsync = false; // Disables async rendering
    const container = reconcilerInstance.createContainer(renderDom, isAsync); // Creates root fiber node.

    const parentComponent = null; // Since there is no parent (since this is the root fiber). We set parentComponent to null.
    reconcilerInstance.updateContainer(
      element,
      container,
      parentComponent,
      callback
    ); // Start reconcilation and render the result
  }
};

module.exports = CustomRenderer;
