const signInErrors = (error: string) => {
  switch (error) {
    case 'auth/invalid-email':
      return 'Invalid email';
    case 'auth/wrong-password':
      return 'Incorrect password';
    case 'auth/user-not-found':
      return 'Not account with that email was found';
    default:
      return 'Email or password was incorrect';
  }
};

export default signInErrors;
