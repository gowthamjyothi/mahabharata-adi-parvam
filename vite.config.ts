import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * The cloud preview reaches the dev server through a forwarded hostname, which
 * Vite must be told about explicitly. Pass it as a comma-separated env var:
 *   PREVIEW_ALLOWED_HOSTS=pv-xxxx.style.dev npm run dev
 */
const previewHosts = (process.env.PREVIEW_ALLOWED_HOSTS ?? '')
  .split(',')
  .map((host) => host.trim())
  .filter(Boolean);

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: previewHosts.length > 0 ? previewHosts : undefined,
  },
  preview: { host: '0.0.0.0', port: 3000 },
});
