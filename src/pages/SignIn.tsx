import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

import { logo } from 'assets';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />

      <Title>Faça seu logon</Title>
    </Container>
  );
};

export default SignIn;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;
