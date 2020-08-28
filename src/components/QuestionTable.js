import React from 'react'
import './QuestionTable.css'

class QuestionTable extends React.Component {

  render () {
    const contentsArr = this.props.contents
    return (
      <tbody>
        <tr>
          <th>{this.props.questionNumber}{this.props.question}</th>
        </tr>
        <tr>
          <td>
            {contentsArr.map(cont => {
              return <Contents
                key={cont.id}
                type={cont.type}
                name={cont.name}
                content={cont.content}
                value={cont.value}
                onClick={this.props.onClick} />
            })}
          </td>
        </tr><tr className="blankLine"></tr>
      </tbody>
    )
  }
}

class Contents extends React.Component {
  render () {
    return <div><input type={this.props.type} name={this.props.name} value={this.props.value} onClick={this.props.onClick} /> {this.props.content} </div>
  }
}

export default QuestionTable;