import React from 'react'
import { Link } from 'react-router-dom'
import './ResultPage.css'

class ResultPage extends React.Component {

  componentDidMount () {
    const { location, history } = this.props
    if ( location.state === undefined ) {
      history.push('/')
    }
  }

  render () {
    const { location } = this.props
    if ( location.state ) {
      const name = location.state.name
      const score = location.state.score
      let level
      let info
      if( score > 20 ) {
        level = "극성 캣맘"
        info = "당신은 ㅅㅌㄱㅇ입니다. 반성하세요."
      } else if ( score < 21 && score > 15 ) {
        level = "위험한 애묘인"
        info = "극성 캣맘이 되지 않도록 조심하세요."
      } else if ( score < 16 && score > 10 ) {
        level = "건강한 애묘인"
        info = "아주 훌륭한 분이군요, 앞으로도 이런 자세를 유지해주세요."
      } else if ( score < 11 && score > 5 ) {
        level = "일반인"
        info = "조금 더 고양이한테 관심을 주는 것은 어떨까요??"
      } else {
        level = "고양이 헤이터"
        info = "야인마!!! 고양이한테 관심좀 가져 인마!!!!!!!!"
      }
      return (
        <div className="result__box">
          <p>{`${name.value}님의 설문 결과는 "${level}"입니다.`}</p>
          <p>{info}</p>
          <Link to="/"><button>처음으로</button></Link>
        </div>
      )
    } else {
      return null
    }
  }
}

export default ResultPage;