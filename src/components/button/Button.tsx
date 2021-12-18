import clsx from 'clsx';
import * as React from 'react';

import { AnyOnClickHandler } from '@/interfaces/types';

export default function Button({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className: string;
  onClick: AnyOnClickHandler;
}) {
  return (
    <button
      className={clsx(
        className,
        'px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-400'
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
