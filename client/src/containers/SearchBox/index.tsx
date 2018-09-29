import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PlaceIcon from '@material-ui/icons/Place';
import LocationIcon from '@material-ui/icons/LocationSearching';
import SwapIcon from '@material-ui/icons/SwapVert';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { cyan, deepOrange } from '@material-ui/core/colors';
import { Row, Col } from 'components/flex';
import { titleRow, inputRow, align, directionIcon, switchIcon, textField, box } from './style.css';
import { SearchField } from '../SearchField';

const themeDark = createMuiTheme({
  palette: {
    primary: { main: '#4285f4' },
    secondary: cyan,
    error: deepOrange,
    type: 'dark'
  },
});

interface SearchState {
  origin: any;
  dest: any;
}

export class SearchBox extends React.Component<{}, SearchState> {
  onPlaceChanged = (field, place) => {
    console.log(field, place);
  }

  render() {
    return (
      <MuiThemeProvider theme={ themeDark }>
        <Col className = { box }>
          <Row className={ titleRow }>
            <IconButton color='inherit' aria-label='Menu'>
              <MenuIcon />
            </IconButton>
            <div className={align}>
              <Typography className={align} variant='title' color='inherit'>
                Urban Commute
              </Typography>
            </div>
          </Row>
          <Row className={ inputRow }>
            <Col flexGrow={1}>
              <Row>
                <LocationIcon className={ directionIcon } />
                <SearchField className={textField} onPlaceChanged={ this.onPlaceChanged.bind(this, 'origin') } id='from' placeholder='Choose starting point...' />
              </Row>
              <Row>
                <PlaceIcon className={ directionIcon } />
                <SearchField className={textField} onPlaceChanged = { this.onPlaceChanged.bind(this, 'dest') } id='to' placeholder='Choose destination...' />
              </Row>
            </Col>
            <Col>
              <SwapIcon className={ switchIcon } />
            </Col>
          </Row>
        </Col>
      </MuiThemeProvider>
    );
  }
}