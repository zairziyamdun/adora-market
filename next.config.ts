import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /** Явный корень при нескольких lockfile на диске (см. предупреждение Next при сборке) */
  outputFileTracingRoot: rootDir,
};

export default nextConfig;
