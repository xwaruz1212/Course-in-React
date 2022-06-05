const Person = (props) => {
    return(
        <li>
        <span>{props.name }</span>
        <button onClick = {props.delete}>delete</button>
        </li>
    )
}

class List extends React.Component {
    state = {
        people: [
            {id:1, name: 'John'},
            {id:2, name: 'Adam'},
            {id:3, name: 'Harry'},
            {id:4, name: 'Greg'},
        ]
    }
    handleDelete(id) {
        const people = [...this.state.people]
        const index = people.findIndex( person => person.id === id)
        people.splice(index, 1)
        this.setState({
            people,
        })
    }

    render() {

        const people = this.state.people.map(person => 
        <Person key ={person.id} 
        name = {person.name} 
        delete = {this.handleDelete.bind(this, person.id)} />)
        return (
            <ul>
             {people}
            </ul>
        )
    }
}
ReactDOM.render(<List/>, document.getElementById('root'))