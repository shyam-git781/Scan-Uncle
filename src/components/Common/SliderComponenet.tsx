import React, {useEffect, useState} from 'react';
import '../../styles/sherlock/_switch.scss'

interface SliderComponentProps {
    defaultChecked: boolean,
    changeHandler: (checked: boolean) => void
    classNames?: string
    testId?: string
    disable?: boolean
}

export function SliderComponent(props: SliderComponentProps) {

    const [switchStatus, setSwitchStatus] = useState(props.defaultChecked)

    useEffect(() => {
        setSwitchStatus(props.defaultChecked)
    }, [props.defaultChecked])

    const handleOnChange = (value: boolean) => {
        setSwitchStatus(value)
        props.changeHandler(value)
    }

    return <div className={`d-flex  switch-group ${props.classNames}`}>
        <label className="switch">
            <input type="checkbox"
                   data-testid={props.testId}
                   checked={switchStatus}
                   disabled={props.disable}
                   onClick={(e) => setSwitchStatus(!switchStatus)}
                   onChange={(e) => handleOnChange(e.target.checked)}
            />
            <span className="slider"/>
        </label>
    </div>
}
