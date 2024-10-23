/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // 注意：这将禁用所有页面的ESLint规则检查
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
