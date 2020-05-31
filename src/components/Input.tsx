import React from 'react';
import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...props }) => {
  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />

      <TextInput placeholderTextColor="#666360" {...props} />
    </Container>
  );
};

export default Input;

const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;

const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
