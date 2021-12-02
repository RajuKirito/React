import React,{useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from '../Colors'

const HeroSection = ()=>{
    const [theme,setTheme] = useContext(ThemeContext);
    const currentTheme = AppTheme[theme];

    return(
        <div style = {{
            padding:'1rem',
            backgroundColor:`${currentTheme.backgroundColor}`,
            color:`${currentTheme.textColor}`,
            textAlign:'center'
        }}>
            <h1>Context API Theme Toggler</h1>
            <p>This is a nice parargraph</p>
            <button
                style={{
                    backgroundColor:'#26AE60',
                    padding:'10px 150px',
                    fontSize:'20px',
                    color:'#FFF',
                    border:`${currentTheme.border}`}}
                onClick={()=>{
                    theme === 'light'?setTheme('dark'):setTheme('light')
                }}
            >{theme === 'light'?'turn off':'turn on'}</button>
        </div>
    )
}

export default HeroSection;