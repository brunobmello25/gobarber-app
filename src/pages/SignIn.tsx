import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

import { Input, Button } from 'components';
import { logo } from 'assets';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />

      <Title>Faça seu logon</Title>

      <Input placeholder="E-mail" name="email" icon="mail" />
      <Input placeholder="Senha" name="password" icon="lock" />

      <Button
        onPress={() => {
          console.log('Login');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 30px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;
