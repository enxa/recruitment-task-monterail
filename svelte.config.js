import adapter from '@sveltejs/adapter-auto';
import path from "path";

// /** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE']
    },
    vite: {
      define: {
        'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID)
      },
      resolve: {
        alias: {
          $animations: path.resolve("./src/animations"),
          $components: path.resolve("./src/components"),
        }
      }
    }
  }
};

export default config;
