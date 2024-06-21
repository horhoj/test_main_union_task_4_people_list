import { ListResponse } from '../types/common';
import { ListOfPeopleItem, ListOfPeopleItemWithoutId } from '../types/ListOfPeopleItem';
import { memoize } from '~/utils/memoize';
import { requestExecutor } from '~/api/apiTransport';
import { BASE_URL } from '~/config/api';

const dataMapper = (data: ListResponse<ListOfPeopleItemWithoutId>): ListResponse<ListOfPeopleItem> => {
  const results = data.results.map((item) => {
    // ид получаем из URL персонажа, так как этого ИД в данных нет
    const id = item.url.split('/')[5];
    return { ...item, id };
  });
  return { ...data, results };
};

const fetchListOfPeople = memoize(async (page?: number, search?: string) => {
  const url = new URL(`${BASE_URL}/people`);
  if (page !== undefined) {
    url.searchParams.set('page', page.toString());
  }
  if (search !== undefined) {
    url.searchParams.set('search', search);
  }

  const res = await requestExecutor<ListResponse<ListOfPeopleItemWithoutId>>(url);

  const data = dataMapper(res);

  return data;
});

export const peopleAPI = { fetchListOfPeople } as const;
