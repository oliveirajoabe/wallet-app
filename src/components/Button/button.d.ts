interface ButtonProps {
  template: 'success';
}

interface ButtonComponentProps extends ButtonProps {
  titleButton: string;

  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onPress?: () => void;
}
