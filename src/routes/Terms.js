import React from 'react'
import './Terms.css'
import { Link } from 'react-router-dom'

class Terms extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: true }
  }

  componentDidMount () {
    const { location, history } = this.props
    if ( location.state === undefined ) {
      history.push('/')
    }
  }

  setValue = () => {
    if ( this.state.value ) {
      if ( document.terms.terms__item.value === "disagree" ) {
        this.setState({ value: !this.state.value})
      }
    } else {
      if ( document.terms.terms__item.value === "agree" ) {
        this.setState({ value: !this.state.value})
      }
    }
    return this.state
  }

  confirm = (e) => {
    if( document.terms.terms__item.value === '' ) {
      window.alert("동의항목에 체크해주세요!")
      e.preventDefault()
    } else if ( !this.state.value ) {
      window.alert("동의함 항목을 체크하지 않으면 설문을 시작할 수 없습니다!")
      e.preventDefault()
    }
    return this.props.location.state
  }

  render () {
    const { location } = this.props
    if ( location.state ) {
      const name = location.state.name
      return (
        <div className="terms__box">
          <pre className="terms__terms">
            본 테스트는 순전히 재미용입니다. 설문 결과에 너무<br />
            몰입하지 말아주시기를 부탁드립니다.<br />
            또한, 해당 설문의 저작권은 SalmonSushi98에 있습니다.<br />
            당사자의 허락 없는 무단 배포 및 수정을 금합니다.
          </pre>
          <form name="terms">
          <input
              type="radio"
              name="terms__item"
              value="agree"
              onClick={this.setValue}
            /><span className="terms__component">동의함 (Agree)</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              name="terms__item"
              value="disagree"
              onClick={this.setValue}
            /><span className="terms__component">동의 안함 (Disagree)</span>
            <br /><br />
            <Link
              to={{
                pathname: "/survey01",
                state: {name}
              }}>
              <button className="terms__btn" onClick={this.confirm}>확인</button>
            </Link>
          </form>
        </div>
      )
    } else {
      return null
    }
  }
}

export default Terms;