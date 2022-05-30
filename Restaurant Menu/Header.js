const Header = (props) => {
    const activeItems = props.items.filter(item => item.active)
    const number = activeItems.length
return (
    <header>
        <h2>Order Size: {number}</h2>
        <h2>Owing: {number ? `${number *15}$` : `You did not order`} </h2>
    </header>
)
}