import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { SpinnerContainer } from '../SpinnerContainer';
import { Router } from '~/router';
import { DefaultLayout } from '~/ui/DefaultLayout';
import { useAppSelector } from '~/store/hooks';
import { peopleErrorSelector } from '~/features/people/store/peopleSlice';
import { Portal } from '~/ui/Portal';
import 'react-toastify/dist/ReactToastify.css';

export function AppContainer() {
  const isApiError = useAppSelector(peopleErrorSelector);

  useEffect(() => {
    if (isApiError) {
      toast.error('Ошибка взаимодействия с сервером АПИ');
    }
  }, [isApiError]);

  return (
    <>
      <SpinnerContainer />
      <DefaultLayout>
        <Router />
      </DefaultLayout>
      <Portal>
        <ToastContainer theme={'light'} position={'top-center'} />
      </Portal>
    </>
  );
}
