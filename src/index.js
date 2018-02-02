import React from 'react'
import PropTypes from 'prop-types'

const BaseSupSub = (props) => {

  const { base, sup, sub, style, ...otherProps } = props

  const coverStyles = {
    fontSize: '1em',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'stretch'
  }

  const supsubStyles = {
    fontSize: '0.5em',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
    paddingLeft: '0.1em'
  }

  return (base ? (
    <div
      {...otherProps}
      style={{ ...style, display: 'inline-block' }}
    >
      {(sup || sub) ? (
        <div style={coverStyles} >
          <div>{base}</div>
          <div style={supsubStyles} >
            <div>{sup}</div>
            <div>{sub}</div>
          </div>
        </div>
      ) :
        base
      }
    </div>
  ) : (
    null
  ))
}

BaseSupSub.propTypes = {
  base: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  sup: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  sub: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

BaseSupSub.defaultProps = {
  base: '',
  sup: '',
  sub: ''
}

export default BaseSupSub