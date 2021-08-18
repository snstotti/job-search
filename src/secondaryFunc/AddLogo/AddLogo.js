import React,{ useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './AddLogo.scss'

export default function AddLogo() {

    const [state, setstate] = useState('')

    const func =()=>{
        // const dt = new FileReader()
        // dt.readAsDataURL(state.name)
        console.log(`./${state.name}`);
    }

    return (
        <div className="avatar bg-info">
            <Form onChange={(e) => setstate(e.target.files[0])}>
                <Form.Group className="position-relative mb-3">
                    <Form.Control
                        type="file"
                        required
                        name="file"
                    />
                    <Button onClick={func}> submit</Button>
                </Form.Group>
                <img src={`./${state.name}`} alt='test' />

            </Form>
        </div>
    )
}
