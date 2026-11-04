
import { useContext } from 'react';
import { ThemeContext } from '../App'; // import the exported context

export const Button = () => {
    const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
        <div>
            My theme is: {theme}
        </div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
    </div>
  )
}