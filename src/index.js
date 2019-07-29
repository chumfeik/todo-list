import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import App from './Components/App';
import store from './reducers';
import { addTask, deleteTask } from './actions';

const addTaskDispatch = text => store.dispatch(addTask(text));

const deleteTaskDispatch = id => store.dispatch(deleteTask(id));

const rerender = () =>
  render(
    <Provider store={store}>
      <App addTask={addTaskDispatch} deleteTask={deleteTaskDispatch} />
    </Provider>,
    document.getElementById('root')
  );
store.subscribe(rerender);
rerender();
