import {useMutation} from '@tanstack/react-query';

import {MutationOptions} from '@/src/types';

import {authService} from '../authService';
import {AuthCredentials} from '../authType';

interface Variables {
  email: string;
  password: string;
}

export function useSignInUseCase(options?: MutationOptions<AuthCredentials>) {
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
    },
  });

  return {
    isLoading: mutation.isPending,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
    signIn: mutation.mutate,
  };
}
