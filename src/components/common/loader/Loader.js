import { ThemeContext } from 'styled-components';
import { useContext } from 'react';

import PropTypes from 'prop-types';

import { Oval } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = ({ global = false }) => {
  const theme = useContext(ThemeContext);

  console.log('theme', theme);
  return (
    <LoaderContainer global={global}>
      <Oval
        color={theme.colors.mainBrandColor}
        secondaryColor={theme.colors.fontColor}
        height={30}
        width={30}
        strokeWidth={5}
      />
    </LoaderContainer>
  );
};

Loader.propTypes = {
  chunk: PropTypes.bool,
};

export default Loader;
