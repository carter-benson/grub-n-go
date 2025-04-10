import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import foodGroups from './foodGroups';

export type FoodGroupOption = {
  label: string;
}

type Props = {
  value: FoodGroupOption | null;
  onChange: (value: FoodGroupOption | null) => void;
}

export default function ComboBox({ value, onChange}: Props) {
  return (
    <Autocomplete
      disablePortal
      options={foodGroups}
      value={value}
      onChange={(event, newValue) => onChange(newValue)}
      sx={{
        text: 'black',
        width: 300 }}
      renderInput={(params) => <TextField {...params} label="Food Group" />}

      slotProps={{
        popper: {
          sx: {
            "& .MuiAutocomplete-option": {
              color: "black",
            },
          },
        },
      }}
    />
  );
}
