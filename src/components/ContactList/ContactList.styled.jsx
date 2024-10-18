import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  border-radius: 10px;
  background-color: #d8d2c2;
  border: 1px solid 
  list-style: none;
`;

export const Item = styled.li`
  background-color: #e4e0e1;
  border: 2px solid #e4e0e1;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  font-family: 'Arial', sans-serif;
`;

export const Button = styled.button`
  padding: 4px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid #ff4d4d; /* Border color */
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
  background: rgba(245, 113, 112, 0.7); /* Transparent background color */
  color: #f5f5f5; /* Text color */

  /* Optional: Change the background color on hover */
  &:hover {
    background: rgba(
      245,
      113,
      112,
      0.9
    ); /* Slightly less transparent on hover */
  }
`;
