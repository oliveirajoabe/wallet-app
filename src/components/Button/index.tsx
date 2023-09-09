import React from 'react';
import * as S from './styles';

export default function Button({
  titleButton,
  template,
  onPress,
}: ButtonComponentProps) {
  return (
    <S.Button template={template} onPress={onPress}>
      <S.TextButton>{titleButton}</S.TextButton>
    </S.Button>
  );
}
