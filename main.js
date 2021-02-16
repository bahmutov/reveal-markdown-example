import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/league.css'

import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js'

let deck = new Reveal({
  plugins: [Markdown],
})
deck.initialize({ slideNumber: true })
