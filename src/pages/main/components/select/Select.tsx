import React, { Component } from 'react'
import classes from './select.module.scss'

const SelectElement = ({ fields }: { fields: string[] }) => {
  return (
    <div className='App'>
      {' '}
      <div className={classes.games__list}>
        <select name='games' id='games-select' className={classes.list__games}>
          {fields.map((item, index) => {
            return (
              <option value='' key={index}>
                {item}
              </option>
            )
          })}
        </select>
        <span className={classes.list__arrow}>&#8250;</span>
      </div>
    </div>
  )
}
export default SelectElement
