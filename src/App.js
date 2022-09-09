import './style/css/reset.css';
import './style/css/app.css';
import FreeCodeCampLogo from './component/FreeCodeCampLogo';
import TasksList from './component/TasksList';

function App() {
  return (
    <div className='App'>
      <FreeCodeCampLogo />
      <div className='tasks-list-main'>
        <h1>My Tasks</h1>
        <TasksList />
      </div>
    </div>
  );
}

export default App;
