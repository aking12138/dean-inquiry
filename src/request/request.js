import instance from "./interceptors";
export default class baseRequest {
  constructor(url, params) {
    this.url = url;
    this.params = typeof params === "undefined" ? {} : params;
  }
  get() {
    return instance
      .get(this.url, { params: this.params })
      .then((res) => {
        if (res.code == 200) {
          return Promise.resolve(res.entitys);
        } else {
          return Promise.resolve(false);
        }
      })
      .catch(() => {
        return Promise.resolve(false);
      });
  }
  post() {
    return instance
      .post(this.url, this.params)
      .then((res) => {
        if (res.data.code == 200) {
          return Promise.resolve(res.data);
        } else {
          return Promise.resolve(res.data);
        }
      })
      .catch(() => {
        return Promise.resolve(false);
      });
  }
  put() {
    return instance
      .put(this.url, this.params)
      .then((res) => {
        if (res.data.code == 200) {
          return Promise.resolve(res.data);
        } else {
          return Promise.resolve(res.data);
        }
      })
      .catch(() => {
        return Promise.resolve(false);
      });
  }
  delete() {
    return instance
      .delete(this.url, { params: this.params })
      .then((res) => {
        if (res.data.code == 200) {
          return Promise.resolve(res.data);
        } else {
          return Promise.resolve(false);
        }
      })
      .catch(() => {
        return Promise.resolve(false);
      });
  }
}
