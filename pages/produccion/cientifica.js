import Head from 'next/head';
import Layout from '../../src/layout';
import NavShared from '../../src/components/shared/nav/nav.shared';
import React from 'react';
import Index from '../../src/components/produccion/index';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Permafrost - INAIGEM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/inaigem.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
      </Head>
      <main>
        <NavShared />
        <Index />
      </main>
    </Layout>
  )
}