export default class ApiTest {
  constructor(httpClient) {
    this.httpClient = httpClient
  }

  create(test) {
    return this.httpClient.$post('/test', test)
  }

  findAll() {
    return this.httpClient.get('/test')
  }

  update(test) {
    return this.httpClient.put('/test', test)
  }

  delete(testId) {
    return this.httpClient.delete('/test', { testId })
  }
}
