import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {FooterComponent} from './shared/features/components/footer/footer.component';
import {NavbarComponent} from './shared/features/components/navbar/navbar.component';
import {ToastComponent} from './shared/features/components/toast/toast.component';
import {Title} from '@angular/platform-browser';
import {ToastService} from './shared/features/services/toast.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavbarComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'fundacion-carmen-mantilla-frontend';
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;
  router: Router = inject(Router);
  titleService: Title = inject(Title);
  toastService: ToastService = inject(ToastService);

  constructor() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.routerState.snapshot.root.firstChild;
        if (currentRoute?.data['title']) {
          this.titleService.setTitle(currentRoute.data['title']);
        }
      }
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // Registra el componente Toast
    this.toastService.register(this.toastComponent);
  }
}
