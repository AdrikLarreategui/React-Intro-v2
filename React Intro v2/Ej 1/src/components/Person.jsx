const Person = (props) => {
    return (
        <div>
            <span>Name: {props.name}, </span>
            <span>Surname: {props.surname}, </span>
            <span>Age: {props.age}, </span>
        </div>
    )
}

export default Person


