import React from 'react';
import PropTypes from 'prop-types';
import { CustomTh } from './styles';

export default function Th({ children, align, ...rest }) {
  return (
    <CustomTh align={align} {...rest}>
      {children}
    </CustomTh>
  );
}

Th.defaultProps = {
  align: 'left',
  children: null,
};

Th.propTypes = {
  children: PropTypes.node,
  align: PropTypes.string,
};
