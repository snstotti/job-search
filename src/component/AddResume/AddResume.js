import React from 'react'
import TitleComponent from '../../secondaryFunc/TitleComponent/TitleComponent'
import MainResumeForm from './MainResumeForm/MainResumeForm'

export default function AddResume() {
    return (
        <div >
            <TitleComponent
                title={'Добавьте своё резюме'}
                description={'Создайте свое резюме и разместите его'}
                component={<MainResumeForm />}
             />
        </div>
    )
}
