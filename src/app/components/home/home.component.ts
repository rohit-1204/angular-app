import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tiles = [1, 2, 3]; // This array can be adjusted to have any number of tiles
  topics = [
    // {
    //   header: 'Components',
    //   desc: 'Structure, creation, lifecycle hooks.',
    //   actions: [
    //     { actionName: 'View', route: 'components-view' },
    //     { actionName: 'Edit', route: 'components-edit' }
    //   ]
    // },
    // {
    //   header: 'Directives',
    //   desc: 'Structural and attribute directives, e.g., *ngFor, *ngIf.',
    //   actions: [
    //     { actionName: 'View', route: 'directives-view' },
    //     { actionName: 'Edit', route: 'directives-edit' }
    //   ]
    // },
    // {
    //   header: 'Services and Dependency Injection',
    //   desc: 'Creating and injecting services, use cases.',
    //   actions: [
    //     { actionName: 'View', route: 'services-view' },
    //     { actionName: 'Edit', route: 'services-edit' }
    //   ]
    // },
    // {
    //   header: 'Routing',
    //   desc: 'Configuring routes, lazy loading, route guards.',
    //   actions: [
    //     { actionName: 'View', route: 'routing-view' },
    //     { actionName: 'Edit', route: 'routing-edit' }
    //   ]
    // },
    {
      header: 'Forms',
      desc: 'Template-driven and reactive forms, form validation.',
      actions: [
        { actionName: 'View', route: 'forms' },
        { actionName: 'Edit', route: 'forms-edit' }
      ]
    },
    {
      header: 'Modules',
      desc: 'NgModule, feature modules, lazy loading.',
      actions: [
        { actionName: 'View', route: 'modules-view' },
        { actionName: 'Edit', route: 'modules-edit' }
      ]
    },
    {
      header: 'Change Detection',
      desc: 'How it works, strategies (default, onPush).',
      actions: [
        { actionName: 'View', route: 'change-detection-view' },
        { actionName: 'Edit', route: 'change-detection-edit' }
      ]
    },
    {
      header: 'Pipes',
      desc: 'Built-in pipes, custom pipes.',
      actions: [
        { actionName: 'View', route: 'pipes-view' },
        { actionName: 'Edit', route: 'pipes-edit' }
      ]
    },
    {
      header: 'HttpClient',
      desc: 'Making HTTP requests, handling responses, interceptors.',
      actions: [
        { actionName: 'View', route: 'http-client-view' },
        { actionName: 'Edit', route: 'http-client-edit' }
      ]
    },
    {
      header: 'Angular CLI',
      desc: 'Commands, configurations, building, and deploying Angular applications.',
      actions: [
        { actionName: 'View', route: 'cli-view' },
        { actionName: 'Edit', route: 'cli-edit' }
      ]
    },
    {
      header: 'State Management',
      desc: 'NgRx, services for state management.',
      actions: [
        { actionName: 'View', route: 'state-management-view' },
        { actionName: 'Edit', route: 'state-management-edit' }
      ]
    },
    {
      header: 'Testing',
      desc: 'Unit testing, integration testing with Jasmine, Karma, or other tools.',
      actions: [
        { actionName: 'View', route: 'testing-view' },
        { actionName: 'Edit', route: 'testing-edit' }
      ]
    },
    {
      header: 'Performance Optimization',
      desc: 'Lazy loading, preloading strategies, change detection strategies.',
      actions: [
        { actionName: 'View', route: 'performance-view' },
        { actionName: 'Edit', route: 'performance-edit' }
      ]
    }
  ];
  constructor(private router: Router) {
  }
  getActionName(action: Action | string): string {
    return typeof action === 'string' ? action : action.actionName;
  }


  getAction(name: string) {
    setTimeout(() => {
      this.router.navigate([name]);
    }, 1000);

  }
  getProgress(name: string): boolean {
    if (name == 'view') {
      return true
    } else {
      return false
    }
  }
}
export interface Action {
  actionName: string;
  route: string;
}

export interface Topic {
  header: string;
  desc: string;
  actions: (Action | string)[];
}
