'use strict';

const rEscapeContent = /<escape(?:[^>]*)>([\s\S]*?)<\/escape>/g;
const placeholder = '\uFFFD';
const rPlaceholder = /(?:<|&lt;)\!--\uFFFD(\d+)--(?:>|&gt;)/g;
const cache = [];

function escapeContent(str) {
  return '<!--' + placeholder + (cache.push(str) - 1) + '-->';
}

function replaceEscapeContent(data) {
  data.content = data.content.replace(rEscapeContent, function(match, content) {
    return escapeContent(content);
  });
  return data;
}

function replacePlaceholderContent(data) {
  data.content = data.content.replace(rPlaceholder, function() {
    return cache[arguments[1]];
  });
  return data;
}

exports.replaceEscapeContent = replaceEscapeContent;
exports.replacePlaceholderContent = replacePlaceholderContent;
