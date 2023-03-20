import styled from '@emotion/styled';
export const ListItem = styled.li`
  border-radius: 60px;
  background: #305048;
  box-shadow: inset 10px 10px 20px #192a26, inset -10px -10px 20px #47766a;
  width: 150px;
  min-height: 130px;
  text-align: center;
  position: relative;
`;
export const Avatar = styled.img`
  padding-top: 20px;
`;

export const Status = styled.span``;

export const Online = styled.span`
  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 30px;
    background: #2e9e50;
    box-shadow: 1px 1px 2px #174f28, -1px -1px 2px #45ed78;
    position: absolute;
    bottom: 21px;
    left: 34px;
  }
  color: #2e9e50;
`;

export const Offline = styled.span`
  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 30px;
    border-radius: 30px;
    background: #c11527;
    box-shadow: 1px 1px 2px #610b14, -1px -1px 2px #ff203b;
    position: absolute;
    bottom: 21px;
    left: 34px;
  }
  color: #c11527;
`;
export const Name = styled.p`
  font-size: 20px;
  letter-spacing: 2px;
`;
