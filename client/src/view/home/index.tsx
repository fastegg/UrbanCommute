import * as React from 'react';
import { Map } from 'components/map';
import { FloatingMenu } from 'components/floatingMenu';
import { Row, Col } from 'components/flex';
import { FullPage } from './style.css';
import { SearchBox } from 'containers/SearchBox';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blue, cyan, deepOrange } from '@material-ui/core/colors';

const pageTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: cyan,
    error: deepOrange,
    type: 'light'
  },
});

export class Home extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={pageTheme}>
        <Col className={FullPage}>
          <Map mapKey='primary' />
          <FloatingMenu>
            <Row>
              <SearchBox />
            </Row>
          </FloatingMenu>
        </Col>
      </MuiThemeProvider>
    );
  }
}