import React from 'react';
import PropsTypes from 'prop-types';
import { CustomTd } from './styles';

export default function Td({ children, align, ...rest }) {
  return (
    <CustomTd align={align} {...rest}>
      {children}
    </CustomTd>
  );
}

Td.defaultProps = {
  align: 'left',
};

Td.propTypes = {
  children: PropsTypes.oneOfType([
    PropsTypes.arrayOf(PropsTypes.node),
    PropsTypes.node,
  ]).isRequired,
  align: PropsTypes.string,
};
