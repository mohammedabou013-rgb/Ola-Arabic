const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Replit + pnpm create temporary directories while Metro is watching them,
// causing ENOENT crashes. Exclude common package tmp folders from Metro's watcher.
const tmpPattern = /node_modules[/\\]\.pnpm[/\\][^/\\]+[/\\]node_modules[/\\][^/\\]*_tmp_\d+/;
const existing = config.resolver?.blockList;

if (Array.isArray(existing)) {
  config.resolver.blockList = [...existing, tmpPattern];
} else if (existing && typeof existing.source === 'string') {
  config.resolver.blockList = new RegExp(
    `(?:${existing.source})|(?:${tmpPattern.source})`,
    existing.flags,
  );
} else {
  config.resolver = config.resolver || {};
  config.resolver.blockList = [tmpPattern];
}

module.exports = config;
