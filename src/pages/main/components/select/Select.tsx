import React, { Component } from 'react'
import classes from './select.module.scss'

const SelectElement = () => {
  return (
    <div className='App'>
      {' '}
      <div className={classes.games__list}>
        <select name='pets' id='pet-select' className={classes.list__games}>
          <option value=''>Игры</option>
        </select>
        <span className={classes.list__arrow}>&#8250;</span>
      </div>
    </div>
  )
}
export default SelectElement
