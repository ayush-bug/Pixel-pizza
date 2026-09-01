import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/Pixel-pizza/',

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, 'menu.html'),
        adminDashboard: resolve(__dirname, 'admin-dashboard.html'),
        orderData: resolve(__dirname, 'order-data.html')
      }
    }
  }
})
