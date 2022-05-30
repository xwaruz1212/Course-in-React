class App extends React.Component {
    state = {  
        items: [
            { id: 1, name: "cup of tea", active: true },
            { id: 2, name: "fish & chips", active: true },
            { id: 3, name: "Spaghetti Bolognese", active: false },
            { id: 4, name: "Polish dumplings", active: false },
            { id: 5, name: "Frogs' legs", active: false },
            { id: 6, name: "Paella", active: false },
          ],
    } 

    handleChangeStatus = (id) => {
        //console.log('działa');

        const items = this.state.items.map(item =>{
            if(id === item.id) {
                item.active = !item.active
            }
            return item
        })
        this.setState({
            item: items
        })
    }
    render() { 
        
        return (
       <>
       <Header items={this.state.items}/>
           <ListItems items={this.state.items} changeStatus = {this.handleChangeStatus}/>
      
       </>
        );
    }
}
 
