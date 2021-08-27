import React from 'react'

export default function ContentComponent({component}) {
    return (
        <section className="categories mt-5 p-5 d-flex flex-column align-items-center">
            <Container>
                {component}
            </Container>
        </section>
    )
}
