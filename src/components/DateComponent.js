const DateComponent = (props) => {    

    const toDateStringFormatter = (date) => {        
        if (date) {
            return new Date(date).toDateString();
        } else {
            return "Unknown"
        }
    }

    return (
        <div>
            <p>{toDateStringFormatter(props.date)}</p>
        </div>
    )
}

export default DateComponent