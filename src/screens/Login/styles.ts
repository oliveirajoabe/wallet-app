import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    padding: 18px;

    background-color: ${theme.colors.dark2};
  `}
`;

export const TextRequired = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-weight: bold;
  `}
`;

export const CustomText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-bottom: 5px;
  `}
`;

export const ButtonLink = styled.TouchableOpacity`
  padding: 8px 0;
`;

export const WrapperEmail = styled.View`
  margin-bottom: 10px;
`;

export const CustomTextLink = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-decoration: underline;
  `}
`;

export const WrapperButton = styled.View`
  padding: 20px 0;
`;
