class App extends React.Component {
    state = {
        presages: ["First Presage", "Second Presage", "Third Presage"],
        presage: "",
        value: ""
    }

    handleShowPresage = () => {
        const index = Math.floor(Math.random() * this.state.presages.length)
        this.setState({
            presage: this.state.presages[index]
        })
    }
    handleInputChange = e =>{
        this.setState({
            value: e.target.value,
        })
    }

    handleAddPersage = () => {
        if(this.state.value === "") 
        return alert ('write something')
        const presages = [... this.state.presages]
        presages.push(this.state.value)
        this.setState({
            presages,
            value:""
        })
    }

   render() {
       return(
           <div>
               <button onClick = {this.handleShowPresage}> Check Presage</button>
               <br/>
               <input type="text" value={this.state.value} onChange = {
               this.handleInputChange}/>
               <button onClick = {this.handleAddPersage}>Add Presage</button>
             {this.state.presage ? <h3>{this.state.presage}</h3> : null}
           </div>
       )
   }
}

ReactDOM.render(<App />, document.getElementById('root'))