import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  list-style: none;

  font-size: 18px;
  color: ${props => props.theme.colors.textColor};
`;

export const StatisticsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const StatisticsContainer = styled.span`
  color: ${props => props.theme.colors.containerColor};
`;
