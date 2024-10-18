import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: #f5f5f5;
  border: 3px solid #385170;
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #142d4c;
  font-size: 20px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid #385170;
  color: #385170;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Arial', sans-serif;
`;
