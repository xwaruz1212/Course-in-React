const header = <h1 className="title">Welcome!</h1>

const classSmall ="small";

const clickHandle = () => alert("clicked!")

const main = (
    <div>
    <h1 onClick={clickHandle}>First Article</h1>
    <p className="blue">Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
)

const footer = (
<footer>
<p className={classSmall}>footer</p>
</footer>
)

const app = [header, main, footer]

ReactDOM.render(app, document.getElementById('root'))