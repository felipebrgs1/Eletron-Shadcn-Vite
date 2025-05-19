import { Button } from './components/ui/button';
import Versions from './components/Versions';

function App(): React.JSX.Element {
    return (
        <>
            <div className='logo-container'>
                <h1 className='text-3xl font-bold underline text-center text-blue-600'>
                    Electron + Vite + React + Tailwind CSS
                </h1>
                <Button>Teste shadcn</Button>
            </div>
            <Versions></Versions>
        </>
    );
}

export default App;
