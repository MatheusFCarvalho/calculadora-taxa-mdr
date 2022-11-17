import styled from "styled-components";

export const Container = styled.form`
  background: #ffffff;
  color: #444444;
  height: 100%;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  
  font-size: medium;
  font-style: italic;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;

  text-align: left;
  padding: 0 60px;
  gap: 20px;
  
  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  input {
    padding: 10px;
    border: 1px solid #444444;
    border-radius: 3px;
    :focus{
        outline: none;
        border: 1px solid blue;
    }
    font-size: medium;
    font-style: italic;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;

}
  .input-money {
    flex-direction: row;
    align-items: center;
    width: 100%;
    border: 1px solid #444444;
    border-radius: 3px;
    padding: 10px;
    :focus-within{
        border: 1px solid blue;

    }
    input {
        width: 100%;
        padding: 0;
        border: none;
    }
  }

  h1 {
    font-size: x-large;
  }
  span{
    font-size: small;
    color: #969696;
  }

  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;

}

`
