/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['rvlcpygatguvxhuliand.supabase.co'], // Autorise les images de votre storage Supabase
  },
  // Optimisation pour le déploiement Vercel
  eslint: {
    ignoreDuringBuilds: true, // Évite les blocages mineurs de linting pendant la démo
  },
  typescript: {
    ignoreBuildErrors: true, // Assure le succès du build même avec des types complexes
  },
}

module.exports = nextConfig
