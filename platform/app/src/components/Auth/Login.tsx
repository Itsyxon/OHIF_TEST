import React, { useState } from 'react';
import { Button, Input, Label } from '@ohif/ui-next';
import { signIn } from './session';

type LoginProps = {
  onSuccess: () => void;
};

function Login({ onSuccess }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (signIn(username.trim(), password)) {
      setError(false);
      onSuccess();
      return;
    }

    setError(true);
  };

  return (
    <div className="bg-background flex h-screen w-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="border-primary/20 flex w-80 flex-col gap-5 rounded-lg border bg-black/40 p-8"
      >
        <div className="flex flex-col gap-1">
          <span className="text-primary text-lg font-semibold">OHIF Viewer</span>
          <span className="text-muted-foreground text-sm">Вход в систему</span>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="login-username">Логин</Label>
          <Input
            id="login-username"
            value={username}
            onChange={event => setUsername(event.target.value)}
            autoComplete="username"
            autoFocus
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="login-password">Пароль</Label>
          <Input
            id="login-password"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            autoComplete="current-password"
          />
        </div>

        {error && <span className="text-destructive text-sm">Неверный логин или пароль</span>}

        <Button
          type="submit"
          disabled={!username || !password}
        >
          Войти
        </Button>
      </form>
    </div>
  );
}

export default Login;
