const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Replit + pnpm create temporary directories under eas-cli that disappear
// while Metro is watching them, causing ENOENT crashes. Exclude them from
// Metro's file watcher.
const blockList = config.resolver?.blockList;
const easTmpPattern = /node_modules[/\\]\.pnpm[/\\]eas-cli.*[/\\]node_modules[/\\]eas-cli_tmp_\d+/;

if (blockList) {
  config.resolver.blockList = new RegExp(
    `(?:${blockList.source})|(?:${easTmpPattern.source})`,
    blockList.flags,
  );
} else {
  config.resolver = config.resolver || {};
  config.resolver.blockList = easTmpPattern;
}

module.exports = config;
