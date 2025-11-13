// API Configuration
// Use relative paths for Next.js API routes when in browser
// Use absolute URL only for server-side or external API calls
export const API_BASE_URL = 
  typeof window !== 'undefined' 
    ? '/api' // Client-side: use relative paths to Next.js API routes
    : process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'; // Server-side: use full URL

export const config = {
  apiUrl: API_BASE_URL,
  timeout: 30000, // 30 seconds
  headers: {
    'Content-Type': 'application/json'
  }
};

export default config;
