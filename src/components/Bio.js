import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'
import {Link} from "react-navi";

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "J14Leonard@gmail.com",
    size: 56,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p>
        Personal blog by {' '}
        <Link href="/about">Jacob H. Leonard</Link>
        <br />
        Your favorite blogger's favorite blog.
      </p>
    </div>
  )
}

export default Bio
