function MyError(status, messege, error) {
    this.status = status;
    this.messege = messege;
    this.error = error;
}

exports.MyError = MyError;