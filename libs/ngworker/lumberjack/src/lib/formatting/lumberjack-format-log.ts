import { LumberjackLog } from '../logs/lumberjack.log';

import { utcTimestampFor } from './utc-timestamp-for';

export function lumberjackFormatLog({ context, createdAt: timestamp, level, message }: LumberjackLog) {
  return `${level} ${utcTimestampFor(timestamp)}${context ? ` [${context}]` : ''} ${message}`;
}