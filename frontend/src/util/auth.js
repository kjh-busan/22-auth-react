export function getAuthToken() {
    const token = localStorage.getItem('token');
    return token;
}

export function tokenLoader() {
  // getAuthToken();
  console.log("auth token loaded");
}