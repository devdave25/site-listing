// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { withSentry } from '@sentry/nextjs';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      res.status(200).json({ status: 'ok' });
      break;
    default:
      res.status(404).end();
      break;
  }
};

export default withSentry(handler);
