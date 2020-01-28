import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import colors from '~/styles/colors';

import logo from '~/assets/logo-header.png';

import { Container, Content, Profile, Menu } from './styles';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

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
              <Menu activeStyle={{ color: colors.linkActive }} to="/planos">
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
              <strong>{profile.name}</strong>
              <button type="button" onClick={handleSignOut}>
                Sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
