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

async function customFetch(config: CustomFetchConfig) {
  // URL 생성 및 쿼리 파라미터 처리
  const url = new URL(`${API_URL}/${config.endpoint}`)
  if (config.params) {
    Object.entries(config.params).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString())
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
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default customFetch
