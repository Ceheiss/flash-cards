const app = (initialState, view, update, node) => {
  let model = initialState;
  let currentView = view(model, dispatch);
  node.appendChild(currentView);
  function dispatch(msg){
    model = update(model, msg);
    const updatedView = view(model, dispatch);
    node.replaceChild(updatedView, currentView);
    currentView = updatedView;
  }
}

module.exports = app;