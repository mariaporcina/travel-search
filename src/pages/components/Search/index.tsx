import React, { SyntheticEvent, useEffect, useMemo, useState } from 'react';
import { Box, Autocomplete, TextField, CircularProgress } from '@mui/material';

import { Location } from '@/pages/types';

export default function Search() {
  const [isLoading, setIsLoading] = useState(false);

  const [selectedValue, setSelectedValue] = useState<string | Location | null>(null);
  const [searchValue, setSearchValue] = useState('');

  const [searchResult, setSearchResult] = useState<readonly Location[]>([]);

  const fetchData = async () => {
    setIsLoading(true);

    await fetch(`/api/fake-api?search=${searchValue}`)
    .then(res => res.json())
    .then(data => setSearchResult(data))
    .catch(err => console.error(err));

    setIsLoading(false);
  }

  useMemo(() => {
    fetchData();
  }, [searchValue]);

  const handleValueChange = (_: SyntheticEvent, newValue: string | Location | null) => {
    setSelectedValue(newValue);
  }

  const handleInputChange = (_: SyntheticEvent, newValue: string) => {
    setSearchValue(newValue);
  }

  return (
    <>
      <Box component="section" sx={{ p: 2, my: 2, backgroundColor: '#1a1a1a', borderRadius: 1 }}>
        <label htmlFor="searchInput">Search for a location</label>
        <Autocomplete
          freeSolo
          disablePortal
          autoHighlight
          sx={() => ({
            width: 500,
            marginY: 2,
            '& label': {
              color: 'rgba(255, 255, 255, 0.7)',
            },
            '& input': {
              color: 'background.paper',
            }
          })}
          filterOptions={(x) => x}
          options={searchResult || []}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Location"
              slotProps={{
                input: {
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                },
              }}
            />
          )}
          loading={isLoading}
          value={selectedValue}
          onChange={handleValueChange}
          inputValue={searchValue}
          onInputChange={handleInputChange}
        />
      </Box>
    </>
  )
}
