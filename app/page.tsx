import React, { ReactElement } from 'react';
import Head from 'next/head';
import DynamicUIConsole from './components/DynamicUIConsole';

interface PageProps {
  // define the props for the Page component here
}

/**
 * Page component that renders the main page content.
 *
 * @param props - The props for the Page component.
 * @returns The rendered Page component.
 */
const Page: React.FC<PageProps> = (props: PageProps): ReactElement => {
  return (
    <div>
      <Head>
        <title>Subby - The Ultimate Transcription App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <DynamicUIConsole />
      </main>
    </div>
  );
}

export default Page;