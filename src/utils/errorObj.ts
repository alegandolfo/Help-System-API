export class ErrorObj {
  code: string
  message: string
  httpCode: number
  details?: object

  constructor (code: string, message: string, httpCode: number, details?: object) {
    this.code = code
    this.message = message
    this.httpCode = httpCode
    this.details = details
  }
}