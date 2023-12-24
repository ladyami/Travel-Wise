import styles from './Button.module.css';

import React from 'react'

const Button = ({children, onClick, type}) => {
  return (
<div onClick={onClick} className={`${styles.btn} ${styles[type]}`}>{children}</div>
  )
}

export default Button