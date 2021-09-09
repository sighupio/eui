import React from 'react';

import { renderToHtml } from '../../services';

import { GuideSectionTypes } from '../../components';

import { FuryConnection } from '../../../../src/components/';

import ConnectionJS from './connection';
const connectionSource = require('!!raw-loader!./connection');
const connectionHtml = renderToHtml(ConnectionJS);

import { connectionConfig } from './playground';

export const ConnectionExample = {
  title: 'FuryConnection',
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
          The <strong>FuryConnection</strong> component is a visual utility for
          showing the state of a connection.
        </p>
      ),
      // components: { ConnectionJS },
      demo: <ConnectionJS />,
      props: { FuryConnection },
      snippet: '<FuryConnection isConnected={false} />',
    },
  ],
  playground: connectionConfig,
};
