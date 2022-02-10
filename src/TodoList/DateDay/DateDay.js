import React from 'react'

function DateDay() {
    const x = new Date();
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return (
        <div className="dateTime">
            <div className='row'>
                <div className='col-1'>
                    {x.getDate()}
                </div>
                <div className='col-1'>
                    <div className='row'>
                        {months[x.getMonth()]}
                    </div>
                    <div className='row'>
                        {x.getFullYear()}
                    </div>
                </div>
                <div className='col offset-5'>
                    {days[x.getDay()].toUpperCase()}
                </div>
            </div>
        </div>
    )
}

export default DateDay