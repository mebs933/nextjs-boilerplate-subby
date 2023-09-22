// page.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import DynamicUIConsole, { DynamicUIConsoleProps } from '../components/DynamicUIConsole'; // import the DynamicUIConsole component from the DynamicUIConsole.tsx file

interface PageProps {
  // define the props for the Page component here
}

/**
 * Page component that renders the main page content.
 *
 * @param props - The props for the Page component.
 * @returns The rendered Page component.
 */
export default function Page(props: PageProps): ReactElement {
  return (
    <div>
      <Head>
        <title>Subby - The Ultimate Transcription App</title> {/* add a title for your app */}
        <link rel="icon" href="/favicon.ico" /> {/* add a favicon for your app */}
      </Head>
      <main>
        <DynamicUIConsole /> {/* use the DynamicUIConsole component in your main content */}
      </main>
    </div>
  );
}