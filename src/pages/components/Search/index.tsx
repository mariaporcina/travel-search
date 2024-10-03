import React from 'react';
import { Box, Autocomplete, TextField } from '@mui/material';

export default function Search() {
  return (
    <>
      <Box component="section" sx={{ p: 2, my: 2, backgroundColor: '#1a1a1a', borderRadius: 1 }}>
        <label htmlFor="searchInput">Search for a location</label>
        <Autocomplete
          disablePortal
          options={[]}
          renderInput={(params) => <TextField {...params} label="Location" />}
          sx={{ width: 500, marginY: 2 }}
        />
      </Box>
    </>
  )
}
