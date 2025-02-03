import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    async exportPathMap(defaultPathMap) {
        delete defaultPathMap["/admin"];
        return defaultPathMap;
    },
};

export default withNextIntl(nextConfig);
