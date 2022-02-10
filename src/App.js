import { GlobalStyle } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { themeSelectors } from './redux/theme';

import themes from './styles/themes/index';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Notify from './components/common/notify/Notify';

const { getTheme } = themeSelectors;

const App = () => {
  const theme = useSelector(getTheme);

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <Header />
        <Main />
        <Notify />
      </ThemeProvider>
    </>
  );
};

export default App;
