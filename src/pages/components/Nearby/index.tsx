import { Box, Button } from '@mui/material'
import React from 'react'

import styles from "@/styles/Details.module.css";

export default function Nearby() {
  return (
    <>
      <Box component="section" sx={{ p: 2, my: 2, backgroundColor: '#1a1a1a', borderRadius: 1 }}>
        <h2 className={styles.title}>Nearby Places</h2>

        <ul>
          <li><Button variant="contained">Florence, Italy</Button></li>
          <li><Button variant="contained">Florence, Italy</Button></li>
          <li><Button variant="contained">Florence, Italy</Button></li>
          <li><Button variant="contained">Florence, Italy</Button></li>
        </ul>
      </Box>
    </>
  )
}
