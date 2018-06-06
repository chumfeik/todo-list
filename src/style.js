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
`;
export const Wrapper = styled.div`
  margin: 1em auto;
  padding: 1em;
  max-width: 25rem;
  background: #fff;
  box-shadow: 0 0 1rem #aaa;
  @media (max-width: 599px) {
    min-width: 100%;
    margin-top: 0;
  }
`;

export const Title = styled.h1`
  text-align: center;
  @media (max-width: 599px) {
    font-size: 0;
    margin: 0;
  }
`;

export const TaskName = styled.input`
  display: inline-block;
  height: 1em;
  max-width: 85%;
  margin: 4%;
  padding: 0.1em;
  font-size: 2em;
  @media (max-width: 599px) {
    margin: 0;
    min-width: 100%;
  }
`;

export const Task = styled.li`
  padding-right: 1em;
  font-size: 2em;
  word-wrap: break-word;
  border-bottom: 0.1em solid #aaa;
  &:last-child {
    border: none;
  }
  @media (max-width: 599px) {
    border: none;
  }
`;
export const Button = styled.button`
  padding: 0.3em;
  cursor: pointer;
  border: none;
  color: #aaa;
  background-color: #fff;
  font-size: 1em;
  font-weight: bold;
  outline: none;
  &.add {
    padding: 0;
    font-size: 2em;
    &:hover {
      color: #0f9;
    }
    @media (max-width: 599px) {
      display: block;
      margin: 0.5em auto -0.5em;
    }
  }
  &.delete {
    &:hover {
      color: #f00;
    }
  }
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
`;