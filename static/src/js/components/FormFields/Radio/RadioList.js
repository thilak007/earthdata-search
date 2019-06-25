import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'

import Radio from './Radio'

export class RadioList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: props.defaultValue
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const { onChange: propsOnChange } = this.props

    propsOnChange(e.target.value)

    this.setState({
      selected: e.target.value
    })
  }

  render() {
    const { children } = this.props
    const { selected } = this.state
    const radios = Children.map(children, (child) => {
      if (child.type !== Radio) return null
      const { props } = child
      return React.cloneElement(child,
        { onChange: this.onChange, checked: selected === props.value })
    })

    return (
      <div className="radio-list">
        {radios}
      </div>
    )
  }
}

RadioList.defaultProps = {
  defaultValue: null,
  onChange: null
}

RadioList.propTypes = {
  children: PropTypes.node.isRequired,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func
}

export default RadioList