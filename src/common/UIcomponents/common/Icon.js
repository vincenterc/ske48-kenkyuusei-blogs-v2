import React from 'react'

const Icon = ({ charCode }) => {
  let ariaLabel
  switch (charCode) {
    case '&#171;':
      ariaLabel = 'left-pointing double angle quotation mark'
      break
    case '&#187;':
      ariaLabel = 'right-pointing double angle quotation mark'
      break
    case '&#8249;':
      ariaLabel = 'SINGLE LEFT-POINTING ANGLE QUOTATION MARK'
      break
    case '&#8250;':
      ariaLabel = 'SINGLE RIGHT-POINTING ANGLE QUOTATION MARK'
      break
    case '&#9658;':
      ariaLabel = 'BLACK RIGHT-POINTING POINTER'
      break
    case '&#9668;':
      ariaLabel = 'BLACK LEFT-POINTING POINTER'
      break
    default:
      ariaLabel = ''
  }

  return (
    <span
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: charCode }}
    />
  )
}

export default Icon
