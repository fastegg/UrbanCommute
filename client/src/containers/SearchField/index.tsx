import * as React from 'react';
import Component from 'Component';
import { TextField } from '@material-ui/core';
import { mountAutoComplete, afterLoad, getPlacesDetails } from 'api/maps';

type SearchFieldProps = {
  id: string;
  placeholder?: string;
  className?: string;
  onPlaceChanged?: (place: any) => void;
}

export class SearchField extends Component<SearchFieldProps> {
  private ref: Element;
  private autoComplete: any;

  placeChanged = async () => {
    const placeDetails = await getPlacesDetails(this.autoComplete.getPlace().place_id);
    this.props.onPlaceChanged && this.props.onPlaceChanged(placeDetails);
  }

  onCatchError(e, details) {
    console.error(e, details);
  }

  componentDidMount() {
    afterLoad(() => {
      this.autoComplete = mountAutoComplete(this.ref, {types: ['address']});
      this.autoComplete.addListener('place_changed', this.placeChanged);
      this.autoComplete.setFields(['place_id']);
    });
  }

  render() {
    const props = {
      ...this.props,
    };

    delete props.onPlaceChanged;

    return (
      <TextField { ...props } inputRef={(ref) => {this.ref = ref}} />
    )
  }
}