import React from 'react';

import { renderToHtml } from '../../services';

import { GuideSectionTypes } from '../../components';

// import { EuiCode } from '../../../../src/components';
import ConnectionProps from '../../../../src/components/connection/types';

import Connection from './connection';
const connectionSource = require('!!raw-loader!./connection');
const connectionHtml = renderToHtml(Connection);

import { connectionConfig } from './playground';

export const ConnectionExample = {
  title: 'Connection',
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
      components: { Connection },
      demo: <Connection isConnected={false} />,
      props: { ConnectionProps },
      snippet: '<Connection isConnected={false} />',
    },
  ],
  playground: connectionConfig,
};
