import {useMutation} from '@tanstack/react-query';

import {useSession} from '@/src/services';
import {MutationOptions} from '@/src/types';

import {authService} from '../authService';
import {AuthCredentials} from '../authTypes';

interface Variables {
  email: string;
  password: string;
}

export function useSignInUseCase(options?: MutationOptions<AuthCredentials>) {
  const {saveCredentials} = useSession();
  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: ({email, password}) => authService.signIn({email, password}),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: authCredentials => {
      if (options?.onSuccess) {
        options.onSuccess(authCredentials);
      }
      saveCredentials(authCredentials);
    },
  });

  return {
    isLoading: mutation.isPending,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
    signIn: mutation.mutate,
  };
}
