const POST = 'POST';

class ApiCallHandler {
  static POST = POST;
  static GET = 'GET';

  async fetchData(URL) {
    try {
      const res = await fetch(URL);
      return res.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async formDataApiCall(URL, method = POST, data) {
    if (!URL) return null;

    const formData = new FormData();
    Object.keys(data).map((k) => formData.append(k, data[k]));

    const requestParams = {
      method,
      body: formData,
    };

    try {
      const res = await fetch(URL, requestParams);
      return res.json();
    } catch (error) {
      //TODO:: Create a nop internet opage and redirect there
    }
  }
  /**
   * @async
   * Used when getting data from a url
   * @param {String} URL
   * @param {String} method GET || POST
   * @param {object} data request body
   * @returns {Promise}
   */
  static async roamAndFind(URL, method = POST, data) {
    return await this.prototype.formDataApiCall(URL, method, data);
  }

  /**
   * @async
   * Used when sending data to a url
   * @param {String} URL
   * @param {String} method GET || POST
   * @param {object} data request body
   * @returns {Promise}
   */
  static async send(URL, method = POST, data) {
    return await this.prototype.formDataApiCall(URL, method, data);
  }

  /**
   * @async
   * Used when getting data from a url
   * @param {String} URL
   * @param {String} method GET
   * @returns {Promise}
   * @example
   * const res = await ApiCallHandler.get(URL);
   **/
  static async getWithoutBody(URL) {
    return await this.prototype.fetchData(URL);
  }
}
export default ApiCallHandler;
