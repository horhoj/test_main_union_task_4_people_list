import { PeopleItem } from '../types/PeopleItem';
import { memoize } from '~/utils/memoize';
import { requestExecutor } from '~/api/apiTransport';
import { BASE_URL } from '~/config/api';

const fetchPeopleItem = memoize(async (id: string) => {
  const res = await requestExecutor<PeopleItem>(`${BASE_URL}/people/${id}/`);

  return res;
});

export const peopleItemAPI = { fetchPeopleItem } as const;
