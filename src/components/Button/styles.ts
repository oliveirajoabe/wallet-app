import { css, styled } from 'styled-components/native';

const templates = {
  success: () => css`
    ${({ theme }) => css`
      background: ${theme.colors.green};
    `};
  `,
};

export const Button = styled.TouchableOpacity<ButtonProps>`
  ${({ template }) => css`
    width: 100%;
    border-radius: 8px;
    height: 50px;

    justify-content: center;
    align-items: center;

    ${templates[template]};
  `}
`;

export const TextButton = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;
