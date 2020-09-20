import React, { useCallback, useRef } from 'react';
import { ScrollView, Image, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import { Input, Button } from 'components';
import { logo } from 'assets';
import { getValidationErrors } from 'utils';
import { useAuth } from 'hooks/auth';
import {
  Container,
  CreateAccount,
  CreateAccountText,
  ForgotPassword,
  ForgotPasswordText,
  Title,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const { signIn, user } = useAuth();

  const handleSignIn = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({ email: data.email, password: data.password });
    } catch (error) {
      Alert.alert(
        'Erro de autenticação',
        'Ocorreu um erro ao fazer login, cheque as credenciais',
      );

      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Image source={logo} />

          <Title>Faça seu logon</Title>

          <Form ref={formRef} onSubmit={handleSignIn}>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              name="email"
              icon="mail"
              placeholder="E-mail"
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef.current?.focus()}
            />

            <Input
              ref={passwordInputRef}
              name="password"
              icon="lock"
              placeholder="Senha"
              secureTextEntry
              returnKeyType="send"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />

            <Button onPress={() => formRef.current?.submitForm()}>
              Entrar
            </Button>
          </Form>

          <ForgotPassword>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPassword>
        </Container>
      </ScrollView>

      <CreateAccount onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountText>Criar uma conta</CreateAccountText>
      </CreateAccount>
    </>
  );
};

export default SignIn;
