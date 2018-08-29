import styled, { injectGlobal } from "styled-components";

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: #ef5;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .task-enter {
    opacity: 0.01;
  }

  .task-enter.task-enter-active {
    opacity: 1;
    transition: 400ms ease-in;
  }

  .task-leave {
    opacity: 1;
  }

  .task-leave.task-leave-active {
    opacity: 0.01;
    transition: 400ms linear;
    transform : translate(-100%, -500%);
  }

`;
export const Wrapper = styled.div`
  max-width: 25rem;
  margin: 1em auto;
  padding: 1em;
  background: #fff;
  border-radius: 1em;
  box-shadow: 0 0 1rem #aaa;
  @media (max-width: 599px) {
    min-width: 100%;
    margin-top: 0;
    margin: 0;
    border-radius: 0;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-auto-rows: 3em;
  @media (max-width: 599px) {
    grid-template-rows: 0 3em;
  }
`;

export const Label = styled.label`
  display: block;
  grid-column-start: 2;
  font-size: 2em;
  text-align: center;
  @media (max-width: 599px) {
    font-size: 0;
  }
`;

export const TaskName = styled.input`
  grid-column: 2 / -2;
  grid-row-start: 2;
  margin-right: 10px;
  padding: 0 1em;
  border: 1px solid black;
  border-radius: 1em;
  :focus {
    outline: none;
  }
  @media (max-width: 599px) {
    grid-column-start: 1;
    margin-left: 2em;
  }
`;

export const Button = styled.button`
  grid-column: -2 / -1;
  grid-row-start: 2;
  background-color: #fff;
  font-size: 2em;
  border: none;
  transition: transform .4s ease-in-out;
  :focus {
    outline: none;
  }
  :hover {
    color: #0f9;
    transform:rotate(180deg);
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 1em;
  list-style: none;
`;

export const Task = styled.li`
  padding: 0.5em;
  background-color: #fff;
  font-size: 1, 5em;
  word-wrap: break-word;
  border-bottom: 0.1em solid #aaa;
  > button {
    margin-right: 0.5em;
    :hover {
      color: red;
    }
  }
`;
