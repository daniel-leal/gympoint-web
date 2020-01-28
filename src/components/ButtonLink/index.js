import React from 'react';
import PropTypes from 'prop-types';
import { CustomButtonLink } from './styles';

import colors from '~/styles/colors';

export default function ButtonLink({ children, to, color, ...rest }) {
  return (
    <CustomButtonLink to={to} color={color} {...rest}>
      <span>{children}</span>
    </CustomButtonLink>
  );
}

ButtonLink.defaultProps = {
  color: colors.primary,
  to: '/',
};

ButtonLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  to: PropTypes.string,
  color: PropTypes.string,
};
