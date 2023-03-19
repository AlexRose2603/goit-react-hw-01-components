import styled from '@emotion/styled';

export const Wrapper = styled.section`
  border-radius: 80px;
  background: #1c2422;
  box-shadow: 50px 50px 100px #0b0e0e, -50px -50px 100px #2d3a36;
  width: 400px;
  height: 200px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  padding: 10px;
  color: #3d8f7a;
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  color: #3d8f7a;
`;

export const Label = styled.span``;

export const Percentage = styled.span``;
