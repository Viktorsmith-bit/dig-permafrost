import Head from 'next/head';
import Layout from '../../src/layout';
import MapViewer from '../../src/components/visor/map.view';
import React from 'react';

export default function Home() {

  return (
    <Layout>
      <Head>
          <title>Permafrost - INAIGEM</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/inaigem.ico" />
          <script src="https://kit.fontawesome.com/5b116e3d11.js" crossorigin="anonymous"></script>
      </Head>
      <main>
          <MapViewer />
      </main>
    </Layout>
  )
}