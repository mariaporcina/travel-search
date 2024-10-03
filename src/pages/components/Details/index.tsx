import React from 'react'
import { Box } from '@mui/material'

import styles from "@/styles/Details.module.css";

export default function Details() {
  return (
    <>
      <Box component="section" sx={{ p: 2, my: 2, backgroundColor: '#1a1a1a', borderRadius: 1 }}>
        <h2 className={styles.title}>Nome</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium quae mollitia itaque perspiciatis quas voluptas dignissimos facilis doloremque eius soluta. Aperiam, veritatis dolore voluptatum culpa qui asperiores reiciendis inventore deserunt!</p>
        <p><strong>Country:</strong> país</p>
        <p><strong>Climate:</strong> clima</p>
        <p><strong>Currency:</strong> moeda</p>
      </Box>
    </>
  )
}
