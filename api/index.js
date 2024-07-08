import ApiTest from '~/api/api.test'

export default class Api {
  constructor(httpClient) {
    this.test = new ApiTest(httpClient)
  }
}
