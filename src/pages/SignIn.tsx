import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';

import { logo } from 'assets';

const SignIn: React.FC = () => {
  return (
    <View>
      <Image source={logo} />
    </View>
  );
};

export default SignIn;

const Container = styled.View``;
