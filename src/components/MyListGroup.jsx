import React from 'react'
import './MyListGroup.scss'

const MyListGroup = (props) => {
    const { todaySharpe, todayReturn, todayRisk} = props;
  return (
    <table class="rwd-table">
  <tr>
    <th>Sharp</th>
    <th>Return</th>
    <th>Risk</th>
  </tr>
  <tr>
    <td data-th="Sharp">{todaySharpe}</td>
    <td data-th="Return">{todayReturn}</td>
    <td data-th="Risk">{todayRisk}</td>
  </tr>
</table>
  )
}

export default MyListGroup