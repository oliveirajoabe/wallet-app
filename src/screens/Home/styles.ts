import { css, styled } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.dark2};
  `}
`;

export const CustomText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;
