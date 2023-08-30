class NotFoundError {
  constructor(message) {
    this.message = message;
    // this.status = 404;
    this.status = 500;
  }
}