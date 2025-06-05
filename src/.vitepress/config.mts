//import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default ({
  lang: 'ca-ES',
  title: 'UF1',
  description: 'Descripció',
  base: '/UF1/',
  outDir: '../docs',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  head: [
    ['link', { rel: 'icon', href: 'img/logo_.png' }],
    //['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    //['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    //['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap', rel: 'stylesheet' }],
    //['link', { rel: 'icon', type: 'image/png', href: '/img/logo.png' }]
  ],
  themeConfig: {
    siteTitle: 'Fonaments de Programació',
    logo: '/img/logo_.png',
    nav: [
      { text: '🏠 Inici', link: '/index' },
      { text: '📋 Objectius', link: '/objectius' },
      { text: '📚 Continguts', items: [
        { text: '1. Introducció', link: '/1-introduccio' },
        { text: '2. Algoritme', link: '/2-algoritme' },
        { text: '3. Cicle de Vida', link: '/3-cicle-vida' },
        { text: "4. Representació d'Algoritmes", link: '/4-algoritmes' },
        { text: "5. Elements d'un Programa", link: '/5-elements' },
        { text: "Exemples", link: '/6-exemples' },
        { text: "Exercicis", link: '/7-exercicis' },
      ]}
    ],
    sidebar: [
      { text: '📚 Continguts', items: [
          { text: '1. Introducció', link: '/1-introduccio' },
          { text: '2. Algoritme', link: '/2-algoritme' },
          { text: '3. Cicle de Vida', link: '/3-cicle-vida' },
          { text: "4. Representació d'Algoritmes", link: '/4-algoritmes' },
          { text: "5. Elements d'un Programa", link: '/5-elements' },
          { text: "💡Exemples", link: '/6-exemples' },
          { text: "✏️Exercicis", link: '/7-exercicis' },
          { text: '<img src="img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' },
          { text: '<img src="img/logo-centro.png" class="logo-anim" style="vertical-align:middle; height:150px;">', link: '' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: '' }
    ],
    footer: {
      message: "CEEDCV - Centre Específic d'Educació a Distància de la Comunitat Valenciana",
      copyright: 'Copyright © 2024-2025'
    },
    outline: {
      label: 'En aquesta pàgina'
    },
    docFooter: {
      prev: 'Anterior',
      next: 'Següent'
    }
  }
})
