import { Injectable } from '@angular/core';

import { LumberjackLevel } from '../logs/lumberjack-level';
import { LumberjackLogLevel } from '../logs/lumberjack-log-level';
import { LumberjackTimeService } from '../time/lumberjack-time.service';

import { LumberjackService } from './lumberjack.service';

@Injectable()
export abstract class LumberjackLogger {
  constructor(private lumberjack: LumberjackService, private time: LumberjackTimeService) {}

  protected createCriticalLogger(message: string, context?: string): () => void {
    return this.createLogger(LumberjackLevel.Critical, message, context);
  }

  protected createDebugLogger(message: string, context?: string): () => void {
    return this.createLogger(LumberjackLevel.Debug, message, context);
  }

  protected createErrorLogger(message: string, context?: string): () => void {
    return this.createLogger(LumberjackLevel.Error, message, context);
  }

  protected createInfoLogger(message: string, context?: string): () => void {
    return this.createLogger(LumberjackLevel.Info, message, context);
  }

  protected createTraceLogger(message: string, context?: string): () => void {
    return this.createLogger(LumberjackLevel.Trace, message, context);
  }

  protected createWarningLogger(message: string, context?: string): () => void {
    return this.createLogger(LumberjackLevel.Warning, message, context);
  }

  private createLogger(level: LumberjackLogLevel, message: string, context?: string): () => void {
    return () => {
      this.lumberjack.log({ context, createdAt: this.time.getUnixEpochTicks(), level, message });
    };
  }
}