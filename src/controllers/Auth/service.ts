import { AxiosInstance } from 'axios'
import Fetcher from 'config/Fetcher'

require('dotenv').config()

const API_SERVICE_USER = process.env.API_SERVICE_USER || 'http://localhost:8001'

const FetchApi = new Fetcher(API_SERVICE_USER)

class AuthService {
  private api: AxiosInstance

  constructor() {
    this.api = FetchApi.default
  }

  /**
   *
   * @param formData
   */
  register(formData: any) {
    return this.api.post(`/v1/auth/sign-up`, formData)
  }

  /**
   *
   * @param formData
   */
  login(formData: any) {
    return this.api.post(`/v1/auth/sign-in`, formData)
  }

  /**
   * Get Profile
   */
  getProfile() {
    return this.api.get(`/v1/profile`)
  }

  /**
   *
   * @param formData
   */
  logout(formData: any) {
    return this.api.post(`/v1/logout`, formData)
  }
}

export default AuthService
