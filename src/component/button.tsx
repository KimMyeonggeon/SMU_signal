import React from 'react';
import { useState } from 'react';

type ButtonType = 'primary' | 'secondary' | 'destructive';
type Size = 'short' | 'long';

type ButtonProps = {
  onClick?: () => void;
  type?: ButtonType;
  size?: Size;
  title: string;
};

const ButtonContainer = styled.div<{
  type: 'primary' | 'secondary' | 'destructive';
}>`
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  display: flex;
  background-color: ${(props) =>
    props.type === 'primary'
      ? theme.color.primary[100]
      : props.type === 'secondary'
      ? theme.color.primary[100]
      : '#FFF6F6'};
  color: ${(props) =>
    props.type === 'primary'
      ? 'white'
      : props.type === 'secondary'
      ? theme.color.primary[100]
      : '#FF3E3E'};
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.type === 'primary'
        ? '#1065ED'
        : props.type === 'secondary'
        ? theme.color.primary[100]
        : '#FFDFDF'};
    color: ${(props) => props.type !== 'destructive' && 'white'};
  }
`;

const ButtonTitle = styled.p`
    font-weight: 700;
    font-size: 16px;
`;

const SIZES = {
  sm: css`
    --button-font-size: 0.875rem;
    --button-padding: 8px 12px;
    --button-radius: 4px;
  `,
  md: css`
    --button-font-size: 1rem;
    --button-padding: 12px 16px;
    --button-radius: 8px;
  `,
  lg: css`
    --button-font-size: 1.25rem;
    --button-padding: 16px 20px;
    --button-radius: 12px;
  `,
};

export default function Button(props: ButtonProps) {
  const { type = 'primary', title, onClick = () => {} } = props;
  const [hover, setHover] = useState(false);
  return (
    <ButtonContainer
      type={type}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  );
}
