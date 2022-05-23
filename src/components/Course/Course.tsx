import React from 'react'
import { undefinedPrice, ICourse } from '../../filterByPrice'
import { Card } from 'antd'
import './Course.css'
import 'antd/dist/antd.css'

interface IProps {
    course: ICourse
}

const Course:React.FC<IProps> = ({ course }) => {
    const { name, prices } = course
    const [startPrice, endPrice] = prices

    return (
        <div className="card">
            <Card hoverable>
                <div className="card__title">{name}</div>
                <div className="card__prices">
                    {startPrice !== undefinedPrice &&
                        <div className="card__price">
                            <div>ОТ</div>
                            <div>{startPrice}₽</div>
                        </div>}
                    {endPrice !== undefinedPrice &&
                        <div className="card__price">
                            <div>ДО</div>
                            <div>{endPrice}₽</div>
                        </div>}
                </div>
            </Card>
        </div>
    )
}

export default Course