import { RouteItem } from './types';
import { Page404 } from '~/app/pages/Error404Page';
import { ListOfPeoplePage } from '~/features/people/pages/ListOfPeoplePage';
import { PeopleItemPage } from '~/features/people/pages/PeopleItemPage';
import { getUUID } from '~/utils/getUUID';

export const routeList = [
  {
    id: getUUID(),
    component: ListOfPeoplePage,
    inMenu: true,
    name: 'listOfPeople',
    path: '/list-of-people',
    title: 'List of people',
  },
  {
    id: getUUID(),
    component: PeopleItemPage,
    inMenu: false,
    name: 'PeopleItem',
    path: '/people-item/:id',
    title: 'People Item',
  },
  {
    id: getUUID(),
    name: 'error404',
    path: '*',
    component: Page404,
    inMenu: false,
    title: '',
  },
] as const satisfies readonly RouteItem[];
