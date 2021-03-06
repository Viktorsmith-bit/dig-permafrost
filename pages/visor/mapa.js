import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from '../../src/layout';
import React from 'react';

const MapViewer = dynamic(()=>import('../../src/components/visor/map.view'), {ssr: false});

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
          <div id="map">
            <MapViewer />
          </div>
      </main>
    </Layout>
  )
}