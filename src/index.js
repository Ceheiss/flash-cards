const view = require('./view.js');
const model = require('./model.js');
const { update } = require('./update.js');
const app = require('./app.js');
const node = document.getElementById('root');

app(model, view, update, node);