import { useEffect, useState } from 'react';

import Button from '@/components/button/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  const [status, setStatus] = useState<string>('');

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Status', status);
  }, [status]);

  const pingApi = async () => {
    setStatus('');
    const result = await fetch('/api/ping');
    setStatus(result.statusText);
  };

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <Button className='mx-2 my-2' onClick={pingApi}>
            Ping server
          </Button>
          <strong>{status}</strong>
        </section>
      </main>
    </Layout>
  );
}
