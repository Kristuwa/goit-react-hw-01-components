import styled from '@emotion/styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const SectionCardStatistics = styled.section`
  width: 350px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0;
  border: 1px solid #4e4e4e;
  border-radius: 10px;
  background-color: #ffffff;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 28px;
  line-height: 1.18;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #a1a1a1;
`;

export const StatsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #4e4e4e;
`;

export const StatItem = styled.li`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  flex-basis: calc(100% / 5);
  background-color: ${getRandomHexColor};

  & + & {
    border-left: 1px solid #4e4e4e;
  }
  &:first-of-type {
    border-bottom-left-radius: 10px;
  }
  &:last-of-type {
    border-bottom-right-radius: 10px;
  }
`;

export const StatLabel = styled.span`
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 5px;
`;

export const StatPercentage = styled.span`
  font-size: 16px;
`;
