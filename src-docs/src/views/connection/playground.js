import { PropTypes } from 'react-view';
import { Connection } from '../../../../src/components/connection';
import { propUtilityForPlayground } from '../../services/playground';
import * as t from '@babel/types';

export const connectionConfig = () => {
  const docgenInfo = Array.isArray(Connection.__docgenInfo)
    ? Connection.__docgenInfo[0]
    : Connection.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.isConnected = true;
  console.log('props', propsToUse)

  return {
    config: {
      componentName: 'Connection',
      props: {propsToUse},
      scope: {
        Connection,
      },
      imports: {
        '@elastic/eui': {
          named: ['Connection'],
        },
      },
    },
  };
};