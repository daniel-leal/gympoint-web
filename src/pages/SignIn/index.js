import React from 'react';
import { Form } from '@rocketseat/unform';

import { Container } from './styles';
import logo from '~/assets/logo.png';

import Label from '~/components/Label';
import Input from '~/components/Input';

export default function SignIn() {
  return (
    <Container>
      <img src={logo} alt="GoBarber" />

      <Form>
        <Label>SEU E-MAIL</Label>
        <Input name="email" type="email" placeholder="Seu e-mail" />

        <Label>SUA SENHA</Label>
        <Input name="password" type="password" placeholder="Sua Senha" />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </Container>
  );
}
