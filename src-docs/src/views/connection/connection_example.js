import React from 'react';

import { renderToHtml } from '../../services';

import { GuideSectionTypes } from '../../components';

import { FuryConnection } from '../../../../src/components/';

import Connection from './connection';
const connectionSource = require('!!raw-loader!./connection');
const connectionHtml = renderToHtml(Connection);

import { connectionConfig } from './playground';

export const ConnectionExample = {
  title: 'Connection',
  isNew: true,
  sections: [
    {
      source: [
        {
          type: GuideSectionTypes.JS,
          code: connectionSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: connectionHtml,
        },
      ],
      text: (
        <p>
          The <strong>Connection</strong> component is a visual utility for
          showing the state of a connection.
        </p>
      ),
      // components: { Connection },
      demo: <Connection />,
      props: { FuryConnection },
      snippet: '<FuryConnection isConnected={false} />',
    },
  ],
  playground: connectionConfig,
};
