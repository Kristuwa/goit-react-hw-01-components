import styled from '@emotion/styled';

export const ListFriends = styled.ul`
  padding: 0;
  margin: 20px auto 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 10px 60px 10px 30px;
  background-color: #ffffff;
`;

export const StatusOnline = styled.span`
  margin-right: 15px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${props =>
    props.isOnline ? 'rgb(49, 167, 75)' : 'rgb(240, 29, 29)'};
`;

export const FriendAvatar = styled.img`
  margin-right: 20px;
`;

export const FriendName = styled.p`
  font-weight: 500;
  font-size: 28px;
`;
