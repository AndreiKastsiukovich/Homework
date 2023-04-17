import React from 'react'
import {Slider, SliderProps} from '@mui/material'

type SliderPropsType = SliderProps & {
    onChange: (e: Event, value: number | number[], activeThumb: number) => void
    value: number | number[]
}

const SuperRange: React.FC<SliderPropsType> = (props) => {
    return (
        <Slider
            sx={{

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
