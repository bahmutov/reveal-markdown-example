import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/league.css'
import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js'

// let Reveal request the Markdown file
// const markdownFilename = './slides/test/PITCHME.md'
// document.querySelector('.slides').innerHTML = `
//   <section data-markdown="${markdownFilename}"
//            data-separator="\\-\\-\\-"
//            data-separator-vertical="\\+\\+\\+" />
// `

const getBaseName = (relativeUrl) => {
  if (!relativeUrl.startsWith('./')) {
    throw new Error(`Is not relative url "${relativeUrl}"`)
  }
  const parts = relativeUrl.split('/').filter((s) => s !== '.') // remove "."
  parts.pop() // ignore the file part
  return parts.join('/')
}

// fetch the Markdown file ourselves
const markdownFilename = './slides/test/PITCHME.md'
// document.querySelector('.slides').innerHTML = `
//   <section data-markdown="${markdownFilename}"
//            data-separator="\\-\\-\\-"
//            data-separator-vertical="\\+\\+\\+" />
// `

const markdownFileBase = getBaseName(markdownFilename)
console.log('markdown file base', markdownFileBase)
const baseUrl = '/reveal-markdown-example/' + markdownFileBase + '/'

const updateRelativeUrls = (md) => {
  return md.replace(/\.\//g, baseUrl)
}

fetch(markdownFilename)
  .then((r) => r.text())
  .then((md) => {
    console.log(md)
    const updatedUrlsMd = updateRelativeUrls(md)
    console.log(updatedUrlsMd)

    document.querySelector('.slides').innerHTML =
      '<section data-markdown data-separator="\\-\\-\\-" data-separator-vertical="\\+\\+\\+">\n' +
      '<textarea data-template>\n' +
      updatedUrlsMd +
      '\n' +
      '</textarea>\n' +
      '</section>\n'

    const deck = new Reveal({
      plugins: [Markdown],
    })
    deck.initialize({ slideNumber: true, minScale: 0.2, maxScale: 1.1 })
  })
