import React from 'react'
import {FormControl,InputGroup,Button} from 'react-bootstrap'

export default function FormJobSearch() {
    return (
        <div>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" >&#128270;</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" >Town</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="primary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}
