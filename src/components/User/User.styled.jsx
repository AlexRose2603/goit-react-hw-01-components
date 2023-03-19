import styled from '@emotion/styled';

export const Profile = styled.div`
  margin: 100px auto;
  width: 600px;
  height: 500px;
  box-shadow: 0px 0px 105px 9px rgba(40, 145, 114, 0.9);
  border-radius: 37% 63% 61% 39% / 30% 35% 65% 70%;
  text-align: center;
`;

export const Description = styled.div`
  width: 320px;
  margin: 20px auto 10px;
  padding-top: 30px;
  color: #aebfb5fa;
  letter-spacing: 2px;
  line-height: 1.2;
  background: rgba(241, 123, 172, 0.33);
  border-radius: 22% 78% 39% 61% / 77% 82% 18% 23%;
  //   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 105px 2px rgba(163, 204, 192, 0.61);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(241, 123, 172, 0.2);
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

export const Name = styled.p`
  font-size: 26px;
`;

export const Tag = styled.p`
  font-size: 26px;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
  padding-bottom: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 15px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  color: #289172;
`;

export const Label = styled.span`
  font-size: 22px;
  letter-spacing: 2px;
  line-height: 1.2;
`;

export const Quantity = styled.span`
  font-size: 26px;
`;
