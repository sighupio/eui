/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { PropsWithChildren, HTMLAttributes, forwardRef } from 'react';
import { CommonProps } from '../common';

import { EuiCodeBlockImpl, EuiCodeBlockImplProps } from './_code_block';

export type EuiCodeBlockRef = HTMLPreElement;

export type EuiCodeBlockProps = CommonProps &
  Omit<EuiCodeBlockImplProps, 'inline'> &
  HTMLAttributes<HTMLElement>;

export const EuiCodeBlock = forwardRef<
  EuiCodeBlockRef,
  PropsWithChildren<EuiCodeBlockProps>
>(({ ...rest }, ref) => {
  return <EuiCodeBlockImpl inline={false} {...rest} ref={ref} />;
});

EuiCodeBlock.displayName = 'EuiCodeBlock';
