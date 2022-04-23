import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      comment: ''
    }
  }
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value }, () => {
      alert(this.state.email)

    })

  }
  changeCommentHandler = (event) => {
    this.setState({ comment: event.target.value }, () => {
      alert(this.state.comment)

    })

  }


  render() {
    return (
      <div>Form
        <form>
          <div>
            <label>USERNAME</label>
            <input type="text" value={this.state.email} onChange={this.changeEmailHandler} />
          </div>
          <div>
            <label>COMMENT</label>
            <textarea type="text" value={this.state.comment} onChange={this.changeCommentHandler} />
          </div>
        </form>

      </div>
    )
  }
}

export default Form