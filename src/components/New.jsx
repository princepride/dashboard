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
    0 : '1st',
    1 : '2nd',
    2 : '3rd',
    3 : '4th',
    4 : '5th',
    5 : '6th',
    6 : '7th',
    7 : '8th',
    8 : '9th',
    9 : '10th',
    10 : '11th',
    11 : '12th',
    12 : '13th',
    13 : '14th',
    14 : '15th',
    15 : '16th',
    16 : '17th',
    17 : '18th',
    18 : '19th',
    19 : '20th',
    20 : '21th',
    21 : '22th',
    22 : '23th',
    23 : '24th',
    24 : '25th',
    25 : '26th',
    26 : '27th',
    27 : '28th',
    28 : '29th',
    29 : '30th',
    30 : '31th',
}

const New = (props) => {
    const { datePublished, description, image, name, url } = props
    const date = new Date(datePublished)
    date.getMonth()
    return (
        <button onClick={() => {window.location=url}}>
        <div className="flex justify-between gap-40">
        <div>
            <div className={`flex justify-start text-2xl italic gap-3`}>
                {name}
            </div>
            <div className={`flex text-left`}>
            {description}
            </div>
            <div className={`flex items-end justify-end`}>{`${month[date.getMonth()]} ${day[date.getDay()]}`}</div>
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