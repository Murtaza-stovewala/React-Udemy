import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main /*className="flex flex-col items-center "*/>
        <AuthInputs />
      </main>
    </>
  );
}
