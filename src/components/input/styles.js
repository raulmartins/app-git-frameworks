import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    margin: 10px 20px;
    padding: 2px 10px;
    width: 300px;
    height: 50px;
    font-size: 30px;
    color: #9393;
    outline: none;
    border-radius: 15px;
    border: none;
    text-align: center;
  }
`
export const Button = styled.button`
  height: 50px;
  background-color: #4caf50;
  border: none;
  border-radius: 15px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  :hover {
    transition: all 0.5s ease-out;
    background-color: #4caf;
    outline: none;
  }
`
