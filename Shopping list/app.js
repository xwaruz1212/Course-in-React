class App extends React.Component {
    state = {
      availableProducts: 9,
      shoppingCart: 1,
    }
  
    handleRemoveFromCart = () => {
      this.setState({
        shoppingCart: this.state.shoppingCart - 1,
      })
    }
  
    handleAddToCart = () => {
      this.setState({
        shoppingCart: this.state.shoppingCart + 1,
      })
    }
  
    handleBuy = () => {
      this.setState({
        availableProducts: this.state.availableProducts - this.state.shoppingCart,
        shoppingCart: 0,
      })
    }
  
    render() {
      const { shoppingCart, availableProducts } = this.state
      const style = shoppingCart === 0 ? { opacity: 0.3 } : {};
  
      return (
        <div>
          <button disabled={shoppingCart ? false : true} onClick={this.handleRemoveFromCart}>-</button>
  
          <span style={style}> {shoppingCart} </span>
  
          <button disabled={shoppingCart === availableProducts ? true : false} onClick={this.handleAddToCart}>+</button>
          {shoppingCart > 0 && <button onClick={this.handleBuy}>Buy</button>}
  
        </div>
      )
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'))