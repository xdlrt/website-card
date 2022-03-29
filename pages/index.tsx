import { Box, Container } from '@mui/material'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { MetaData } from './components/MetaData'
import { WebsiteCard } from './components/WebsiteCard'

export default function Home() {
  const [metadata, setMetadata] = useState<Metadata | null>(null);
  return (
    <div className={styles.container}>
      <Head>
        <title>website-card</title>
        <meta name="description" content="Generated url to a card" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Container sx={{ height: '100vh' }}>
        <Box mt={8} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <MetaData updateData={setMetadata} />
        </Box>
        <Box pt={4} pb={4} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <WebsiteCard data={metadata} />
        </Box>
      </Container>
    </div>
  )
}
