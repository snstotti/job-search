import React from 'react'
import Categories from './Categories/Categories'
import SubscribeBlock from './SubscribeBlock/SubscribeBlock'
import FormJobSearch from './FormJobSearch/FormJobSearch'
import TitleComponent from '../../secondaryFunc/TitleComponent/TitleComponent'
import BlockHeader from '../../secondaryFunc/BlockHeader/BlockHeader'

export default function HomeContainer() {
    return (
        <>
            <TitleComponent
                title={'Title'}
                description={'Descriptionss'}
                component={<FormJobSearch />} />
            
            <Categories />
            <SubscribeBlock />
        </>
    )
}
