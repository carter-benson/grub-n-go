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

export default function ComboBox({ value, onChange }: Props) {
  return (
    <Autocomplete
      disablePortal
      options={foodGroups}
      value={value}
      onChange={(event, newValue) => onChange(newValue)}

      sx={{
        width: 300,
        '& .MuiOutlinedInput-notchedOutline': {
          borderWidth: '2px',
        },
        '& .MuiOutlinedInput-root': {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main',
            borderWidth: '2px',
          },
        },
      }}

      renderInput={(params) => <TextField {...params} label="Enter a Food Group..." sx={{
        input: { color: "text.secondary" },
        label: { color: "text.secondary" },
        '.MuiInputBase-root': { color: "text.secondary" },
        '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'primary.main'}
      }} />
      }

      slotProps={{
        popper: {
          sx: {
            "& .MuiAutocomplete-option": {
              color: "text.secondary",
            },
          },
        },
      }}
    />
  );
}
