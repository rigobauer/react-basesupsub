import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import styles from './index.css'

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

class BaseSupSub extends PureComponent {

  render() {
    const { base, sup, sub, className, ...otherProps } = this.props
  
    return (base ? (
      <div
        className={ styles.dinlineblock + (className ? ' ' + className : '')}
        {...otherProps}
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