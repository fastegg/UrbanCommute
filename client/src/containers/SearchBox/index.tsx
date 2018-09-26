import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PlaceIcon from '@material-ui/icons/Place';
import LocationIcon from '@material-ui/icons/LocationSearching';
import { TextEntry } from 'components/styled/TextEntry';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { cyan, deepOrange } from '@material-ui/core/colors';
import { Row, Col } from 'components/flex';
import { searchRow, align, directionIcon } from './style.css';
import { SearchField } from '../SearchField';

const themeDark = createMuiTheme({
  palette: {
    primary: { main: '#4285f4' },
    secondary: cyan,
    error: deepOrange,
    type: 'dark'
  },
});

export class SearchBox extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={themeDark}>
        <AppBar position='static'>
          <Row className={searchRow}>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <div className={align}>
              <Typography className={align} variant="title" color="inherit">
                Urban Commute
              </Typography>
            </div>
          </Row>
          <Row>
            <Col>
              <Row><LocationIcon className={ directionIcon } /><SearchField id="from" /></Row>
              <Row><PlaceIcon className={ directionIcon } /><SearchField id="to" /></Row>
            </Col>
          </Row>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}