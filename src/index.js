import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import store from './reducers';
import { addTask, deleteTask } from './actions';

const addTaskDispatch = text => store.dispatch(addTask(text));

const deleteTaskDispatch = id => store.dispatch(deleteTask(id));

const state = {
  store,
  addTask: addTaskDispatch,
  deleteTask: deleteTaskDispatch
};

export const Context = React.createContext();

const rerender = () =>
  render(
    <Context.Provider value={state}>
      <App />
    </Context.Provider>,
    document.getElementById('root')
  );
store.subscribe(rerender);
rerender();
