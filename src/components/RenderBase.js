import { Component } from 'react'

import PropTypes from 'prop-types'

class RenderBase extends Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }

}

export default RenderBase
