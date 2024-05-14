export interface CustomFetchConfig {
  endpoint: string
  params?: Record<string, string>
  headers?: HeadersInit
  cache?: RequestCache
  next?: NextFetchRequestConfig
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: any
}

const defaultHeaders: HeadersInit = {
  'Content-Type': 'application/json',
}
const API_URL = 'https://port-0-ddal-kkak-api-rccln2llvthjqik.sel5.cloudtype.app'

async function customFetch(config: CustomFetchConfig): Promise<Response> {
  // URL 생성 및 쿼리 파라미터 처리
  const url = new URL(`${API_URL}/${config.endpoint}`)
  if (config.params) {
    Object.keys(config.params).forEach((key) => {
      if (config.params && config.params[key]) {
        url.searchParams.append(key, config.params[key])
      }
    })
  }

  // Fetch 요청 옵션 설정
  const fetchOptions: RequestInit = {
    method: config.method || 'GET',
    headers: {
      ...defaultHeaders,
      ...config.headers,
    },
    cache: config.cache,
    next: config.next,
  }

  if (config.body && (config.method === 'POST' || config.method === 'PUT' || config.method === 'DELETE')) {
    fetchOptions.body = JSON.stringify(config.body)
  }

  try {
    const response = await fetch(url.toString(), fetchOptions)
    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`)
    }
    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default customFetch
