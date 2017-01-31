import adonis from './adonis'
import ThemeProvider from './lib/theme-provider'
import withTheme from './lib/with-theme'
import preRenderCSS from './lib/prerender-css'
import { StyleSheetServer, StyleSheet, css } from './globals'

adonis.disableInjection()

export default adonis
export { StyleSheetServer, StyleSheet, css, ThemeProvider, withTheme, preRenderCSS }
