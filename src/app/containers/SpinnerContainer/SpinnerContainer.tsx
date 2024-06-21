import { peopleIsLoadingSelector } from '~/features/people/store/peopleSlice';
import { useAppSelector } from '~/store/hooks';
import { Spinner } from '~/ui/Spinner';

export function SpinnerContainer() {
  const isLoading = useAppSelector(peopleIsLoadingSelector);

  return <Spinner isShow={isLoading} />;
}
