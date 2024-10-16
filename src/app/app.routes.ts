import { Routes } from '@angular/router';
import {MainComponent} from "@app/routes";


export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children:[
      {
        path: 'dashboard',
        title: 'Dashboard',
        data: {
          label: 'Dashboard'
        },
        loadComponent: ()=> import('./routes').then((x)=>x.DashboardComponent)
      },
      {
        path: 'activity',
        title: 'Activity',
        data: {
          label: 'Activity'
        },
        loadComponent: ()=> import('./routes').then((x)=>x.ActivityComponent)
      },
      {
        path: 'chat',
        title: 'Chat',
        data: {
          label: 'Chat'
        },
        loadComponent: ()=> import('./routes').then((x)=>x.ChatComponent)
      },
      {
        path: 'event',
        title: 'Event',
        data: {
          label: 'Events'
        },
        loadComponent: ()=> import('./routes').then((x)=>x.EventComponent)
      },
      {
        path: 'finance',
        title: 'Finance',
        data: {
          label: 'Finance'
        },
        loadComponent: ()=> import('./routes').then((x)=>x.FinanceComponent)
      },
      {
        path: 'food',
        title: 'Food',
        data: {
          label: 'Food'
        },
        loadComponent: ()=> import('./routes').then((x)=>x.FoodComponent)
      },
      {
        path: 'students',
        title: 'Students',
        data: {
          label: 'Students'
        },
        loadComponent: ()=> import('./routes').then((x)=>x.StudentsComponent)
      },
      {
        path: 'students/new',
        title: 'New Student',
        data: {
          label: 'Add New Student'
        },
        loadComponent: ()=> import('./routes').then((x)=>x.StudentsComponent)
      },
      {
        path: 'teachers',
        title: 'Teachers',
        data: {
          label: 'Teachers'
        },
        loadComponent: ()=> import('./routes').then((x)=>x.TeachersComponent)
      },
      {
        path: 'teachers/new',
        title: 'New Teacher',
        data: {
          label: 'Add New Teacher'
        },
        loadComponent: ()=> import('./routes').then((x)=>x.NewTeacherComponent)
      },
      {
        path: 'user',
        title: 'User',
        data: {
          label: 'User'
        },
        loadComponent: ()=> import('./routes').then((x)=>x.UserComponent)
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'main',
  }
];
