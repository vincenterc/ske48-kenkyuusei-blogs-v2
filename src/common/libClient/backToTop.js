/**
 * Scroll back to top' function
 *
 * backToTop: () => void
 */
const backToTop = () => {
  document.body.scrollTop = 0 // For Chrome, Safari and Opera
  document.documentElement.scrollTop = 0 // For IE and Firefox
}

export default backToTop
