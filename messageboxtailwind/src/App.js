import MessageBox from './components/MessageBox';

function App() {
  return (
    <div className='min-h-screen bg-cover bg-no-repeat bg-fixed bg-center bg-blue-500'>
      <h1 className= ' flex place-content-center text-2xl font-semibold text-rose-900'>
        Facebook MessageBox with Reaction
      </h1>
      <MessageBox/>
    </div>

  );
}

export default App;
