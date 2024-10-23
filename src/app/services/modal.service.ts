import {
  ApplicationRef,
  ComponentRef,
  inject,
  Injectable,
  OnDestroy,
  TemplateRef,
  Type,
  ViewContainerRef
} from '@angular/core';
import {ModalComponent} from '@app/components';
import {NavigationEnd, Router} from '@angular/router';
import {filter, Observable, Subject} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ModalOptions} from '@app/innterfaces-types';

@Injectable({
  providedIn: 'root'
})
export class ModalService implements OnDestroy {
  private router = inject(Router);
  private applicationRef = inject(ApplicationRef);
  private rootViewContainerRef = this.applicationRef?.components[0].injector.get(ViewContainerRef);
  private componentRef?: ComponentRef<unknown>;
  private modalNotifier?: Subject<unknown>;
  private _dialogData: Record<string, unknown> | null = null;

  constructor() {
    this.router.events
      .pipe(
        filter((e) => (e instanceof NavigationEnd)),
        takeUntilDestroyed()
      ).subscribe(() => this.close());
  }

  open(ref?: Type<unknown> | TemplateRef<unknown>, options: Partial<ModalOptions> = {}): Observable<unknown> {
    this.close();
    let projectableNodes;
    if (ref instanceof TemplateRef) {
      const contentViewRef = ref.createEmbeddedView(null);
      projectableNodes = [contentViewRef.rootNodes];
    }
    this._dialogData = options.data || null;
    delete options.data;
    this.componentRef = this.rootViewContainerRef.createComponent(ModalComponent, {projectableNodes});
    if (ref && !(ref instanceof TemplateRef)) {
      this.componentRef.setInput('cmp', ref);
    }
    Object.entries(options).forEach(([key, value]) => this.componentRef?.setInput(key, value))
    this.modalNotifier = new Subject();

    return this.modalNotifier.asObservable();
  }

  close(data?: unknown) {
    this._dialogData = null;
    this.modalNotifier?.next(data);
    this.modalNotifier?.complete();
    this.componentRef?.destroy();
  }

  get dialogData() {
    return this._dialogData;
  }

  ngOnDestroy(): void {
    this.close();
  }
}
