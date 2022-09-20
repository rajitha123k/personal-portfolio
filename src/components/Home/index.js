import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import MyPic from '../../assets/images/my_pic.jpg'
import MyResume from '../../assets/files/my_resume.pdf'
//import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', 'R', 'a', 'j', 'i', 't', 'h', 'a', '.']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  //   useEffect(() => {
  //     return setTimeout(() => {
  //       setLetterClass('text-animate-hover')
  //     }, 4000)
  //   }, [])

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(MyResume).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = MyResume
        alink.click()
      })
    })
  }

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            /> */}
          </h1>
          <h2>Full Stack / Android Developer / Machine Learning Scientist</h2>
          <button onClick={onButtonClick} className="flat-button">
            RESUME
          </button>
        </div>

        {/* <Logo /> */}
      </div>
      <img
        className="image-zone"
        src={MyPic}
        alt="JavaScript Developer Name, Web Developer Name"
      />

      <Loader type="pacman" />
    </>
  )
}

export default Home
