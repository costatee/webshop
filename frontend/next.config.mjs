/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;


  

// export const config = {
//     reactStrictMode: true,
//     swcMinify: true,
//     images: {
//         formats: ['image/avif', 'image/webp'],
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: '*.png',
//                 port: '*',
//                 pathname: '**',
//             }
//         ],
//     }
// };

// const nextConfig = {
//     async headers() {
//       return [
//         {
//           source: '/(.*)',
//           headers: [
//             {
//                 key: 'Content-Security-Policy',
//                 value: "default-src 'self'; frame-src 'self' https://www.google.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://maps.gstatic.com"
//             },
//           ],
//         },
//       ];
//     },
//   };
  
//   export default nextConfig;
  