import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import foodGroups from './foodGroups';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      options={foodGroups}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Food Group" />}
    />
  );
}
