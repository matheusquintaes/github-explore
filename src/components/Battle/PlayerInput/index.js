import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'
import { MdSubdirectoryArrowLeft } from "react-icons/md";

export default class PlayerInput extends React.Component {

  state = {
    username: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.username)
  }
  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  render() {
    return (

      <S.FormWrapper onSubmit={this.handleSubmit}>
    
        <S.InputWrapper>
          <input
            type='text'
            id='username'
            placeholder='github username'
            autoComplete='off'
            value={this.state.username}
            onChange={this.handleChange}
          />

          <button
            type='submit'
            disabled={!this.state.username}
            >
            <MdSubdirectoryArrowLeft/>
          </button>
        </S.InputWrapper>
      </S.FormWrapper>
    )
  }
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}
