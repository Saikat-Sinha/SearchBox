import styled from "styled-components";

export const SearchForm = styled.form`
  max-width: 400px;
  margin: 50px auto;
`;

export const SearchInput = styled.input`
  margin: 0;
  text-align: left;
  outline: 0;
  border: 10px solid #f7f7f7;
  width: 120%;
  left: -10%;
  position: relative;
  z-index: 2;
  font-size: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
  padding: 20px;
`;

export const SuggestionsContainer = styled.ul`
  margin: 0;
  padding: 0;
  position: relative;
  height: 520px;
  overflow: auto;
  width: 120%;
  display: flex;
  flex-direction: column;
  left: -10%;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SuggestionItem = styled.li`
  background: ${props => (props.isActive ? "#a8a6ce" : "white")};
  list-style: none;
  border-bottom: 1px solid #d8d8d8;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
  margin: 0;
  padding: 5px 20px;
  transition: background 0.4s;
  > p {
    margin: 10px 0;
  }

  > span {
    font-size: 12px;
    color: #d62074;
  }

  hr {
    margin: 5px 0;
    border: 0.5px solid #1e1e1f17;
  }
`;
