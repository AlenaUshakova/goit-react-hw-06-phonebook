import styled from 'styled-components';

export const FilterName = styled.input`
  display: flex;
  flex-direction: column;
  margin: 0 auto 1.5rem auto;
  align-items: center;
  font-size: medium;
  text-align: left;
  padding: 0.5rem 15rem 0.5rem 1rem;
  color: inherit;
  background-color: rgba(241, 208, 202, 0.3);
  border: 1px solid rgba(241, 208, 202, 0.4);
  border-radius: 5px;
  transition: border-color 250ms linear, color 250ms linear,
    background-color 250ms linear;
  :hover,
  :focus {
    cursor: pointer;
    border-color: rgba(209, 72, 17, 0.945);
    color: rgba(209, 72, 17, 0.945);
    background-color: rgba(240, 213, 183, 0.5);
  }
`;
export const FilterStyle = styled.label`
  font-size: medium;
`;
