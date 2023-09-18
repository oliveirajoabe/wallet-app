interface FetchLogin {
  email: string;
  password: string;
  onSuccess?: () => void;
}

interface FetchLogout {
  userId: string | undefined;
  accessToken: string | undefined;
  onSuccess?: () => void;
}
