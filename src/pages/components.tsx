// !STARTERCONF You can delete this page
import clsx from 'clsx';
import * as React from 'react';

import Button from '@/components/button/Button';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function ComponentsPage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  const toggleMode = () => {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  };

  const textColor = mode === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <Layout>
      <Seo
        templateTitle='Components'
        description='Pre-built components with awesome default'
      />

      <main>
        <section className={clsx(mode === 'dark' ? 'bg-dark' : 'bg-gray-50')}>
          <div
            className={clsx(
              'layout py-20 min-h-screen',
              mode === 'dark' ? 'text-white' : 'text-black'
            )}
          >
            <h1>Built-in Components</h1>
            <div className='flex flex-wrap gap-2 mt-8'>
              <Button
                onClick={toggleMode}
                className={clsx(
                  mode === 'dark'
                    ? 'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800'
                    : 'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100'
                )}
              >
                Set to {mode === 'dark' ? 'light' : 'dark'}
              </Button>
            </div>

            <ol className='mt-8 space-y-6'>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>Next Image</h2>
                <p className={clsx('!mt-1 text-sm', textColor)}>
                  Next Image with default props and skeleton animation
                </p>
                <NextImage
                  useSkeleton
                  className='w-32 md:w-40'
                  src='/favicon/apple-icon-180x180.png'
                  width='180'
                  height='180'
                  alt='Icon'
                />
              </li>
            </ol>
          </div>
        </section>
      </main>
    </Layout>
  );
}
