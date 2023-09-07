import { css, styled } from 'styled-components/native';

interface InputProps {
  hasError?: boolean;
}

export const Input = styled.TextInput<InputProps>`
  ${({ theme, hasError = false }) => css`
    height: 40px;
    border: 1px solid ${hasError ? theme.colors.error : theme.colors.gray1};
    background: ${theme.colors.gray2};
    border-radius: 5px;
    padding: 0 10px;
    color: ${theme.colors.white};
  `}
`;

export const TextError = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.error};
  `}
`;
