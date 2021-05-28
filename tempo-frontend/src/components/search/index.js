import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete  from '@material-ui/lab/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={this.proops.citys}
      getOptionLabel={(city) => city.name}
      style={{ width: '100%' }}
      renderInput={(params) => <TextField {...params} label="Procurar Cidade" variant="outlined" />}
    />
  );
}