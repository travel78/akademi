import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IListResponse} from '@app/innterfaces-types/api';
import {ITeacherItem} from '@app/innterfaces-types';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() {
  }

  getMany(): Observable<IListResponse<ITeacherItem>> {

    return of({
      data: [
        {
          id: '1',
          firstName: 'Dimitres',
          lastName: 'Viga',
          degree: 'Mathematics',
          phone: '8687878',
          email: 'fssffs@fr',
        },
        {
          id: '2',
          firstName: 'Dimitres',
          lastName: 'Viga',
          degree: 'Mathematics',
          phone: '8687878',
          email: 'fssffs@fr',
          photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpcTlSDQIWbfoZyfHPXTffs9EMAB9VbdqexQ&s'
        },
        {
          id: '3',
          firstName: 'Dimitres',
          lastName: 'Viga',
          degree: 'Mathematics',
          phone: '8687878',
          email: 'fssffs@fr',
          photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqup-c-_TzyLFEnLzgT-kodvVuA-gxjUUZiQ&s'
        },
        {
          id: '4',
          firstName: 'Dimitres',
          lastName: 'Viga',
          degree: 'Mathematics',
          phone: '8687878',
          email: 'fssffs@fr',
          photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk9Hpu705RV9viW858taUJ-q5Dycse4zH0jw&s'
        },
        {
          id: '5',
          firstName: 'Dimitres',
          lastName: 'Viga',
          degree: 'Mathematics',
          phone: '8687878',
          email: 'fssffs@fr',
        },
        {
          id: '6',
          firstName: 'Dimitres',
          lastName: 'Viga',
          degree: 'Mathematics',
          phone: '8687878',
          email: 'fssffs@fr',
          photoUrl: 'https://cdn.icon-icons.com/icons2/4054/PNG/512/profile_user_shopping_payment_sale_discount_card_member_tag_icon_258341.png'
        },

      ], metadata: {page: 1, total: 20, perPage: 10}
    });
  }

  getOne() {
  }

  create() {
  }

  update() {
  }

  delete() {
  }
}
