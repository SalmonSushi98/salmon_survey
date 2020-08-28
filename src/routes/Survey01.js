import React from 'react'
import './Survey01.css'
import QuestionTable from '../components/QuestionTable'
import { answer1, answer2, answer3, answer4, answer5 } from '../components/AnswerSheet'
import { Link } from 'react-router-dom'

class Survey01 extends React.Component {
  constructor (props) {
    super(props)
    this.state = { score: 0 }
  }

  componentDidMount () {
    const { location, history } = this.props
    if ( location.state === undefined ) {
      history.push('/')
    }
  }

  saveScore = (e) => {
    const fb = document.formBody
    if ( fb.question1.value === '' || fb.question2.value === '' || fb.question3.value === '' || fb.question4.value === '' || fb.question5.value === '' ) {
      window.alert("모든 항목에 체크해주세요!")
      e.preventDefault()
    }
  }

  calSc = (e) => {
    const fb = document.formBody
    const a1 = parseInt(fb.question1.value) || 0
    const a2 = parseInt(fb.question2.value) || 0
    const a3 = parseInt(fb.question3.value) || 0
    const a4 = parseInt(fb.question4.value) || 0
    const a5 = parseInt(fb.question5.value) || 0
    const sc = a1 + a2 + a3 + a4 + a5
    setTimeout((sc) => {
      console.log(sc)
      this.setState({ score: sc })
      console.log(this.state.score)
    }, 50, sc)
  }

  render () {
    const { location } = this.props
    if ( location.state ) {
      const name = location.state.name
      const score = this.state.score
      return (
        <div className="survey__box">
          <form name="formBody">
            <table>
              <QuestionTable
                questionNumber="01. " question="당신은 고양이를 사랑하나요?"
                contents={answer1}
                onClick={this.calSc}
              />
              <QuestionTable
                questionNumber="02. " question="위험에 빠진 고양이를 발견했을 때 당신은 어떻게 하실 건가요?"
                contents={answer2}
                onClick={this.calSc}
              />
              <QuestionTable
                questionNumber="03. " question="밤에 산책을 하다가 고양이가 당신에게 다가왔을 때 어떻게 하실 건가요?"
                contents={answer3}
                onClick={this.calSc}
              />
              <QuestionTable
                questionNumber="04. " question="다음 중 가장 혼나야 되는 사람은 누구인가요?"
                contents={answer4}
                onClick={this.calSc}
              />
              <QuestionTable
                questionNumber="05. " question="친구가 고양이카페에 가자고 했을 때 당신의 반응은 무엇인가요?"
                contents={answer5}
                onClick={this.calSc}
              />
            </table>
          </form>
          <br />
          <Link
            to={{
              pathname: "/result",
              state: { name, score }
            }}>
            <button id="confirm" onClick={this.saveScore}>결과 확인</button>
          </Link>
        </div>
      )
    } else {
      return null
    }
  }
}

export default Survey01;