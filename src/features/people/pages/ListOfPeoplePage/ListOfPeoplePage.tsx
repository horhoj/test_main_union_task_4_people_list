import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { peopleSlice } from '../../store/peopleSlice';
import { ListWrapper } from '../../components/ListWrapper';
import { PeopleItemCard } from '../../components/PeopleItemCard';
import { getSearchParams } from './ListOfPeoplePage.helpers';
import { DefaultLayout } from '~/ui/DefaultLayout';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { Search } from '~/ui/Search';
import { Paginator } from '~/ui/Paginator';
import { DEFAULT_PAGE_ELEMENT_COUNT } from '~/config/api';
import { PageTitle } from '~/ui/PageTitle';
import { getRoutePath } from '~/router';

export function ListOfPeoplePage() {
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const { page, search } = getSearchParams(searchParams);

  const listOfPeopleRequest = useAppSelector((state) => state.people.fetchListOfPeopleRequest);
  const fetchListOfPeopleRequest = useAppSelector((state) => state.people.fetchListOfPeopleRequest);

  useEffect(
    () => () => {
      dispatch(peopleSlice.actions.clear());
    },
    [],
  );

  useEffect(() => {
    dispatch(peopleSlice.thunks.fetchListOfPeopleThunk({ search, page }));
  }, [search, page]);

  const handleSearch = (search: string) => {
    const value = search.trim();
    if (value === '') {
      setSearchParams({});
      return;
    }
    setSearchParams({ search: value });
  };

  const handlePaginate = (page: number) => {
    let params: Record<string, string> = { page: page.toString() };
    if (search) {
      params = { ...params, search };
    }
    setSearchParams(params);
  };

  const navigate = useNavigate();

  const handleCardWrapClk = (peopleItemId: string) => {
    const path = getRoutePath('PeopleItem', peopleItemId);

    navigate(path);
  };

  return (
    <DefaultLayout>
      <PageTitle title={'List of people page'} />
      <Search onSearch={handleSearch} value={search} isLoading={listOfPeopleRequest.isLoading} autoFocus={true} />
      {listOfPeopleRequest.data && (
        <>
          <ListWrapper isLoading={fetchListOfPeopleRequest.isLoading}>
            {listOfPeopleRequest.data.results.map((peopleItem) => (
              <PeopleItemCard
                peopleItem={peopleItem}
                key={peopleItem.id}
                isLoading={listOfPeopleRequest.isLoading}
                onClick={() => handleCardWrapClk(peopleItem.id)}
              />
            ))}
            {listOfPeopleRequest.data.results.length === 0 && <div>Nothing found</div>}
          </ListWrapper>
          <Paginator
            count={listOfPeopleRequest.data.count}
            pageElementCount={DEFAULT_PAGE_ELEMENT_COUNT}
            onPaginate={handlePaginate}
            isLoading={fetchListOfPeopleRequest.isLoading}
            currentPage={page ?? 1}
          />
        </>
      )}
    </DefaultLayout>
  );
}
