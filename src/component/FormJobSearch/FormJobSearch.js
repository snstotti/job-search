import React from 'react'
import {FormControl,InputGroup,Button} from 'react-bootstrap'

export default function FormJobSearch() {
    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="primary">Button</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}
