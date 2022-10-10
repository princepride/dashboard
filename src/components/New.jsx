import React from 'react'
import { userProfileData } from '../data/userData';

const month = {
    0 : 'January',
    1 : 'February',
    2 : 'March',
    3 : 'April',
    4 : 'May',
    5 : 'June',
    6 : 'July',
    7 : 'August',
    8 : 'September',
    9 : 'October',
    10 : 'November',
    11 : 'December',
}

const day = {
    1 : '1st',
    2 : '2nd',
    3 : '3rd',
    4 : '4th',
    5 : '5th',
    6 : '6th',
    7 : '7th',
    8 : '8th',
    9 : '9th',
    10 : '10th',
    11 : '11th',
    12 : '12th',
    13 : '13th',
    14 : '14th',
    15 : '15th',
    16 : '16th',
    17 : '17th',
    18 : '18th',
    19 : '19th',
    20 : '20th',
    21 : '21th',
    22 : '22th',
    23 : '23th',
    24 : '24th',
    25 : '25th',
    26 : '26th',
    27 : '27th',
    28 : '28th',
    29 : '29th',
    30 : '30th',
    31 : '31th',
}

const New = (props) => {
    const { datePublished, description, image, name, url } = props
    const date = new Date(datePublished)
    return (
        <button onClick={() => {window.location=url}}>
        <div className="flex justify-between gap-40">
        <div>
            <div className={`flex justify-start text-2xl italic gap-3 font-semibold`}>
                {name}
            </div>
            <div className={`flex text-left`}>
            {description}
            </div>
            <div className={`flex items-end justify-end italic`}>{`${month[date.getMonth()]} ${day[date.getDate()]}`}</div>
        </div>
        <img
          className="max-w-full h-auto justify-end items-end rounded-2xl right-0"
          src={image}
        />
        </div>
        </button>
    )
}

export default New