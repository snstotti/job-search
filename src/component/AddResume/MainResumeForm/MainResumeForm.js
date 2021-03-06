import React from 'react'
import { Button} from 'react-bootstrap'
import AddLogo from '../../../secondaryFunc/AddLogo/AddLogo'
import BasicInfo from './BasicInfo/BasicInfo'
import IntroInfo from './IntroInfo/IntroInfo'
import TagsList from './TagsList/TagsList'

export default function MainResumeForm() {
    return (
        <div className='d-flex w-100 bg-light p-5 justify-content-between '>
            <div className='mr-3'>
                <AddLogo />
            </div>

            <div className='w-75'>
                <IntroInfo />
                <hr className="text-black mt-5" />
                <h4 className="text-muted text-center">Основная информация</h4>
                <div className="w-100 bg-light pt-3 d-flex flex-wrap" style={{ margin: '0 0 0 auto' }}>
                    <BasicInfo />
                    <hr className="text-black mt-5" />
                </div>
                <h4 className="text-muted text-center">Список тегов</h4>
                <div className="w-100 bg-light p-3 d-flex justify-content-start"
                    style={{ margin: ' 0 0 0 auto' }}>
                    <TagsList />
                </div>
                <div className="w-100 d-flex justify-content-end bg">
                    <Button className="text-right" variant="success">Сохранить</Button>
                </div>

            </div>

            
        </div>
    )
}
