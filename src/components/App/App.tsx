import React, { useState, useCallback, ChangeEvent } from 'react'
import { undefinedPrice, TPrice, ICourse, filterByPrice } from '../../filterByPrice'
import Course from '../Course/Course'
import { Input, Button } from 'antd'
import './App.css'
import 'antd/dist/antd.css'

const courses = [
    {id: "01", name: "Courses in United States", prices: [null, 100]},
    {id: "01", name: "Courses in China", prices: [null, 200]},
    {id: "03", name: "Courses in Japan", prices: [500, null]},
    {id: "04", name: "Courses in Germany", prices: [600, null]},
    {id: "05", name: "Courses in India", prices: [100, 600]},
    {id: "06", name: "Courses in United Kingdom", prices: [200, 500]},
    {id: "07", name: "Courses in France", prices: [0, 600]},
    {id: "08", name: "Courses in Italy", prices: [100, null]},
    {id: "09", name: "Courses in Canada", prices: [null, null]},
    {id: "10", name: "Courses in South Korea", prices: [null, 300]},
    {id: "11", name: "Courses in Russia", prices: [null, 400]},
    {id: "12", name: "Courses in Brazil", prices: [700, null]},
    {id: "13", name: "Courses in Australia", prices: [800, null]},
    {id: "14", name: "Courses in Spain", prices: [300, 800]},
    {id: "15", name: "Courses in Mexico", prices: [400, 700]},
    {id: "16", name: "Courses in Indonesia", prices: [0, 800]},
    {id: "17", name: "Courses in the Netherlands", prices: [200, null]},
    {id: "18", name: "Courses in Switzerland", prices: [null, 2000]},
    {id: "19", name: "Courses in Turkey", prices: [null, 1000]},
    {id: "20", name: "Courses in Saudi Arabia", prices: [null, null]},
]

const App: React.FC = () => {
    const [filteredCourses, setFilteredCourses] = useState<ICourse[]>(courses)
    const [startRange, setStartRange] = useState<TPrice>(undefinedPrice)
    const [endRange, setEndRange] = useState<TPrice>(undefinedPrice)

    const onChangeStartRange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "") setStartRange(null)
        else setStartRange(Number(e.target.value))
    }

    const onChangeEndRange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "") setEndRange(null)
        else setEndRange(Number(e.target.value))
    }

    const buttonHandler = () => {
        const res = filterByPrice(courses, [startRange, endRange])
        setFilteredCourses(res)
    }

    return (
        <div className="app">
            <div className="wrapper">
                <div className="app__title mb-10">Результатов: {filteredCourses.length}</div>
                <Input type="number" prefix="ОТ" className="mb-10"
                       value={startRange === null ? "" : startRange}
                       onChange={onChangeStartRange}
                />
                <Input type="number" prefix="ДО" className="mb-10"
                       value={endRange === null ? "" : endRange}
                       onChange={onChangeEndRange}
                />
                <Button type="primary" block onClick={buttonHandler}>Фильтровать</Button>
                {filteredCourses.map(course => <Course key={course.id} course={course}/>)}
            </div>
        </div>
    )
}

export default App