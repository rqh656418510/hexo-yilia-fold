'use strict';

const placeholder = '\uFFFD';
const rPlaceholder = /(?:<|&lt;)\!--\uFFFD(\d+)--(?:>|&gt;)/g;
const cache = [];

function escapeContent(str) {
  return '<!--' + placeholder + (cache.push(str) - 1) + '-->';
}

function replacePlaceholderContent(data) {
  data.content = data.content.replace(rPlaceholder, function() {
    return cache[arguments[1]];
  });
  return data;
}

exports.replacePlaceholderContent = replacePlaceholderContent;
