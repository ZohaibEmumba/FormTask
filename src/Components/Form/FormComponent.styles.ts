import styled from "styled-components";

export const FormStyles = styled.div`
  padding: 10px 30px;
  margin: 0px;

  .form-style {
    margin: 20px auto;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    padding: 40px 20px;
    background-color: blanchedalmond;
    border-radius: 10px;
    border: 1px solid lightgray;

    .fields {
      margin: 15px 0px;
    }
    .radio-btn {
      display: flex;
      flex-direction: revert;
      padding: 15px 0px;
    }
  }
`;

export const Input = styled.input`
  display: none;
`;
