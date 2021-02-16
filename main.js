import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/league.css'
import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js'

const markdownFilename = './slides/intro/PITCHME.md'
document.querySelector('.slides').innerHTML = `
  <section data-markdown="${markdownFilename}"
           data-separator="\\-\\-\\-"
           data-separator-vertical="\\+\\+\\+" />
`

const deck = new Reveal({
  plugins: [Markdown],
})
deck.initialize({ slideNumber: true, minScale: 0.2, maxScale: 1.1 })
