//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  experimental: {
    appDir: true,
  },
  nx: {
    svgr: true,
  },
};

module.exports = withNx(nextConfig);
