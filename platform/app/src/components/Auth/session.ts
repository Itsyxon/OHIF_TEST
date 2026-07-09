const STORAGE_KEY = 'ohif:auth';

const CREDENTIALS = {
  username: 'Doctor',
  password: '123',
};

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.localStorage.getItem(STORAGE_KEY) === 'true';
}

export function signIn(username: string, password: string): boolean {
  const valid = username === CREDENTIALS.username && password === CREDENTIALS.password;
  if (valid) {
    window.localStorage.setItem(STORAGE_KEY, 'true');
  }
  return valid;
}

export function signOut(): void {
  window.localStorage.removeItem(STORAGE_KEY);
}
