import React from 'react';
import { Link } from 'react-router-dom';
import colors from '~/styles/colors';

import logo from '~/assets/logo-header.png';

import { Container, Content, Profile, Menu } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="Gympoint" />
          </Link>

          <ul>
            <li>
              <Menu activeStyle={{ color: colors.linkActive }} to="#">
                ALUNOS
              </Menu>
            </li>
            <li>
              <Menu activeStyle={{ color: colors.linkActive }} to="#">
                PLANOS
              </Menu>
            </li>
            <li>
              <Menu activeStyle={{ color: colors.linkActive }} to="#">
                MATRÍCULAS
              </Menu>
            </li>
            <li>
              <Menu activeStyle={{ color: colors.linkActive }} to="#">
                PEDIDOS DE AUXÍLIO
              </Menu>
            </li>
          </ul>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Daniel Leal</strong>
              <span>Sair do Sistema</span>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
