import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { peopleSlice } from '../../store/peopleSlice';
import { PeopleItemCardForPeopleItemPage } from '../../components/PeopleItemCardForPeopleItemPage';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { Button } from '~/ui/Button';
import { DefaultLayout } from '~/ui/DefaultLayout';
import { PageTitle } from '~/ui/PageTitle';

export function PeopleItemPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams<{ id: string }>();
  const id = params.id ?? '_';

  const handleBack = () => {
    navigate(-1);
  };

  const fetchPeopleItemRequest = useAppSelector((state) => state.people.fetchPeopleItemRequest);

  useEffect(() => {
    dispatch(peopleSlice.thunks.fetchPeopleItemThunk(id));
  }, [id]);

  useEffect(
    () => () => {
      dispatch(peopleSlice.actions.clear());
    },
    [],
  );

  return (
    <DefaultLayout>
      <>
        {fetchPeopleItemRequest.data && id && (
          <>
            <PageTitle title={`${fetchPeopleItemRequest.data.name} page`} />
            <Button onClick={handleBack}>Back to List Of People</Button>
            <PeopleItemCardForPeopleItemPage peopleItem={fetchPeopleItemRequest.data} id={id} />
          </>
        )}
      </>
    </DefaultLayout>
  );
}
