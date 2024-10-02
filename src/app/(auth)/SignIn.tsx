import {Link} from 'expo-router';
import {Text, TextInput, TouchableOpacity} from 'react-native';

import {Screen} from '@/components';
import {useSignInUseCase} from '@/features/auth';

export default function SignIn() {
  const {signIn} = useSignInUseCase();

  function handleSignIn({email, password}: {email: string; password: string}) {
    signIn({email, password});
  }

  return (
    <Screen>
      <Text
        style={{
          fontFamily: 'SpaceMono',
          fontSize: 24,
          marginBottom: 10,
          color: '#09090b',
        }}>
        Olá,
      </Text>
      <Text
        style={{
          fontFamily: 'SpaceMono',
          fontSize: 24,
          marginBottom: 40,
          color: '#09090b',
        }}>
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        placeholder="email@email.com"
        style={{
          height: 50,
          paddingHorizontal: 8,
          backgroundColor: '#ffffff',
          color: '#09090b',
          fontSize: 16,
          borderRadius: 8,
          marginBottom: 20,
        }}
      />
      <TextInput
        placeholder="*****"
        secureTextEntry
        style={{
          height: 50,
          paddingHorizontal: 8,
          backgroundColor: '#ffffff',
          color: '#09090b',
          fontSize: 16,
          borderRadius: 12,
          marginBottom: 20,
        }}
      />

      <Link
        href="/(auth)/signup"
        style={{
          fontFamily: 'SpaceMono',
          fontSize: 16,
          color: '#09090b',
          textAlign: 'right',
          marginBottom: 20,
        }}>
        Esqueci minha senha
      </Link>

      <TouchableOpacity
        onPress={() =>
          handleSignIn({email: 'teste@teste.com', password: '1234567'})
        }
        activeOpacity={0.8}
        style={{
          width: '100%',
          backgroundColor: '#09090b',
          height: 50,
          borderRadius: 12,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
        }}>
        <Text
          style={{
            fontFamily: 'SpaceMono',
            fontSize: 16,
            color: '#ffffff',
          }}>
          Entrar
        </Text>
      </TouchableOpacity>

      <Link href="/(auth)/signup" asChild>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            width: '100%',
            height: 50,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#09090b',
          }}>
          <Text
            style={{
              fontFamily: 'SpaceMono',
              fontSize: 16,
              color: '#09090b',
            }}>
            Criar uma conta
          </Text>
        </TouchableOpacity>
      </Link>
    </Screen>
  );
}
