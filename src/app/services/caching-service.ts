import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Services that retrieve data should extend this class. It provides a set refresh interval on which the services should
 * update their cache and a destroy Subject on which their observables should be terminated.
 *
 * Extending classes should implement OnDestroy.
 */
@Injectable()
export abstract class CachingService implements OnDestroy {
  // protected static readonly REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes
  protected static readonly REFRESH_INTERVAL = 5000; // 5 minutes
  protected destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
