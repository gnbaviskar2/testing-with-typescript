export class PasswordChecker {
  public checkPassword(password: string): boolean {
    if (password.length < 8) {
      return false;
    }

    if (password == password.toLowerCase()) {
      // containing no upper case letters
      return false;
    }

    if (password == password.toUpperCase()) {
      // should contain some lower case letter also
      return false;
    }
    return true;
  }
}
