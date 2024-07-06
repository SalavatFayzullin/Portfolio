const isProd = process.env.NODE_ENV === 'production'

export const reactStrictMode = true
export const basePath = isProd ? '/Portfolio' : ''
export const assetPrefix = isProd ? '/Portfolio' : ''
export const output = 'export'
export const images = {
  unoptimized: true,
  domains: [
    'www.google.com'
  ]
}