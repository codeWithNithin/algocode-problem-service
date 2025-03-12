const marked = require('marked')
const sanitizeHtmlLib = require('sanitize-html')
const TurndownService = require('turndown')

function sanitizeMarkdownContent(markdownContent) {

  const turndownService = new TurndownService()
  // 1. convert makrdown to HTML
  const convertedHTML = marked.parse(markdownContent);
  console.log(`converted HTML`, convertedHTML)
  //  2. sanitize HTML
  const sanitizedHtml = sanitizeHtmlLib(convertedHTML, {
    allowedTags: sanitizeHtmlLib.defaults.allowedTags.concat(['img'])
  })

  console.log('sanitizedHTML', sanitizedHtml)

  // convert sanitized HTML back to markup
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

  console.log('sanitizedMarkdown', sanitizeMarkdownContent)

  return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent