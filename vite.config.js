
import { defineConfig } from 'vite'
import { resolve } from "node:path";
import { env } from 'process';
 

export default defineConfig({

  build: {
    // build 했을 때 docs 폴더에 생성
    outDir: 'docs',
  },
  
  server: {
    host:'localhost',
    port:3000,
    cors:true,
  },

  css:{
    devSourcemap:true,
    modules:{
      generateScopedName: env === 'development' ? 
      "[name]__[local]__[hash:base64:3]" 
      : "[name]__[local]__[hash:base64:5]"
    },
  },

  resolve:{
    alias : {
      '@':resolve(__dirname,'src')
    }
  },

})
