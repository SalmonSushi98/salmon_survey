import React, { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home (props) {
  const [name, setName] = useState({ value: '' })

  const setUserName = (e) => {
    setName({ value: e.target.value })
    return name.value
  }

  const confirm = (e) => {
    if( name.value === '' ) {
      window.alert("이름을 입력해주세요!")
      e.preventDefault()
    } else if( window.confirm(`${name.value}님이 맞습니까?`) ) {
      return name
    } else {
      e.preventDefault()
    }
  }

  return (
    <div className="home__box">
      <form>
        <input
          type="text"
          className="home__name"
          placeholder="이름을 입력해주세요."
          onChange={setUserName}
        />
        <br />
        <Link
          to={{
            pathname: "/terms",
            state: {name}
          }}>
          <button className="home__btn" onClick={confirm}>확인</button>
        </Link>
      </form>
    </div>
  )
}

export default Home;