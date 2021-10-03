import '../App.css';
import Cards_38 from './Cards_38';

function Todo_38(props) {
  return (
    <div>
      <div className='App'>
        <h1>My Todos</h1>
        <Cards_38 text='React' />
        <Cards_38 text='C++' />
        <Cards_38 text='SQL' />
      </div>
    </div>
  );
}

export default Todo_38;
