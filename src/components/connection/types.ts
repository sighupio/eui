import { HTMLAttributes } from "react";
import { CommonProps } from '../common';

export type ConnectionProps = HTMLAttributes<HTMLDivElement> &
CommonProps & {
  isConnected: boolean;
};