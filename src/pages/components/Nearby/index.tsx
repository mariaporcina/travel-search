import { Box, Button } from '@mui/material'
import React from 'react'

import styles from "@/styles/Nearby.module.css";

import { Location } from '@/types';

type NearbyProps = {
  nearbyLocations: Location[];
  selectLocation: (location: string | Location | null) => void;
}

export default function Nearby({ nearbyLocations, selectLocation }: NearbyProps) {
  return (
    <>
      <Box component="section" sx={{ p: 2, my: 2, backgroundColor: '#1a1a1a', borderRadius: 1 }}>
        <h2 className={styles.title}>Nearby Places</h2>

        <ul className={styles.list}>
          { nearbyLocations && nearbyLocations.map(loc => <li key={loc.id}><Button onClick={() => selectLocation(loc)} variant="contained">{ loc.name }</Button></li>) }
        </ul>
      </Box>
    </>
  )
}
