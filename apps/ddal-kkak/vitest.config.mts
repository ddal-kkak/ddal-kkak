import react from '@vitejs/plugin-react'

const { defineConfig } = await import('vitest/config')

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
})
