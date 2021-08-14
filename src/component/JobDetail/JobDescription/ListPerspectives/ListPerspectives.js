import React from 'react'
import './ListPerspectives.scss'

const ListPerspectives = () => {
    const arrClassname = [
        {class:'bi-geo',text:'Togliatti, Sam. Obl'},
        {class: 'bi-clock-history', text: '40h / week'},
        {class: 'bi-briefcase', text: 'Full time'},
        {class: 'bi-lightbulb', text: 'higher education'},
        {class: 'bi-piggy-bank', text: '$90,000 - $110,000 / month'},
       
    ]

    const list = arrClassname.map(el => {
        return (
            <li key={el.class} className='perspectives__item'>
                <i className={`"bi" ${el.class} mr-2`}></i>
                <span className="">{el.text}</span>
            </li>
        )
    })

    return (
        <div className="perspectives">
            <ul>
                {list}
            </ul>
        </div>
    )
}
export default ListPerspectives