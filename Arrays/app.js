const data = {
    users: [
      {
        id: 1,
        age: 29,
        name: "Adam",
        sex: "male",
      },
      {
        id: 2,
        age: 49,
        name: "Taylor",
        sex: "female",
      },
      {
        id: 3,
        age: 19,
        name: "Jenna",
        sex: "female",
      },
      {
        id: 4,
        age: 24,
        name: "John",
        sex: "male",
      }
    ]
  }
  
  const Item = ({ user }) => (
    <div className="userInfo">
      <h1>{user.name}</h1>
      <p><strong>Information about user:</strong></p>
      <p>User age: <strong>{user.age}</strong></p>
      <p>User sex: {user.sex}</p>
    </div> 
    )
  
    class ListItems extends React.Component {
    state = {
      select: "all",
    }
  
    handleUsersFilter(option) {
      this.setState({
        select: option
      })
  
    }
  
    usersList = () => {
      let users = this.props.data.users;
      switch (this.state.select) {
        case "all":
          return users.map(user => <Item user={user} key={user.id} />)
        case "female":
          users = users.filter(user => user.sex === "female");
          return users.map(user => <Item user={user} key={user.id} />)
        case "male":
          users = users.filter(user => user.sex === "male");
          return users.map(user => <Item user={user} key={user.id} />)
        default:
          return "Something went wrong"
  
      }
    }
    render() {
      return (
        <div>
          <button onClick={this.handleUsersFilter.bind(this, "all")}>ALL</button>
          <button onClick={this.handleUsersFilter.bind(this, "female")}>WOMEN</button>
          <button onClick={this.handleUsersFilter.bind(this, "male")}>MEN</button>
          {this.usersList()}
        </div>
      )
    }
  }
  
  ReactDOM.render(<ListItems data={data} />, document.getElementById('root'))
  