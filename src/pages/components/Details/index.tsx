import React from 'react'
import { Box } from '@mui/material'

import styles from "@/styles/Details.module.css";

import { Location } from '@/types';

type DetailsProps = {
  location: Location;
}

export default function Details({ location }: DetailsProps) {
  return (
    <>
      {location && (
        <Box component="section" sx={{ p: 2, my: 2, backgroundColor: '#1a1a1a', borderRadius: 1 }}>
          <h2 className={styles.title}>{ location.name }</h2>
          <p>{ location.description }</p>
          <p className={styles.detail}><strong>Country:</strong> { location.country }</p>
          <p className={styles.detail}><strong>Climate:</strong> { location.climate }</p>
          <p className={styles.detail}><strong>Currency:</strong> { location.currency }</p>
        </Box>
      )}
    </>
  )
}
