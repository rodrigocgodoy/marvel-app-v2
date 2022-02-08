import { toggleThemeMode } from '@utils/theme';
import type { NextPage } from 'next';

const Home: NextPage = (): JSX.Element => {
  const toggleTheme = (): void => {
    toggleThemeMode();
  };

  return (
    <div className="bg-white text-pink dark:bg-black dark:text-white">
      <h1>Marvel app</h1>
      <button onClick={toggleTheme} type="button">
        Toggle theme
      </button>
    </div>
  );
};

export default Home;
