import React from 'react'
import PropTypes from 'prop-types'

const BaseSupSub = (props) => {

  const { base, sup, sub, className, style } = props

  const coverStyles = {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'stretch'
  }

  const baseStyles = {
    fontSize: '1em'
  }

  const supsubStyles = {
    fontSize: '0.5em',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
    paddingLeft: '0.1em'
  }

  return (
    <div
      {...{className}}
      style={{ ...style, display: 'inline-block' }}
    >
      <div style={coverStyles} >
        <div style={baseStyles} >
          {base}
        </div>
        {(sup !== '' || sub !== '') &&
          <div style={supsubStyles} >
            <div>{sup}</div>
            <div>{sub}</div>
          </div>
        }
      </div>
    </div>
  )
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