import {Grid} from "@nextui-org/react"
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const ToggleButton = styled.button`
  --toggle-width: 80px;
  --toggle-height: 38px;
  --toggle-padding: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: var(--color-bg-toggle);
  transition: background 0.25s ease-in-out;
`;

const ToggleThumb = styled.span`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: white;
  transition: transform 0.25s ease-in-out;
  transform: ${(p) =>
    p.activeTheme === "dark"
      ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
      : "none"};
`;

const ThemeToggle = () => {
    const [activeTheme,setActiveTheme] = useState('light')
   const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';
    
useEffect(()=>{
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem('theme',activeTheme)
},[activeTheme]);

  return (
    

   <Grid.Container gap={2} justify="center" display="flex" direction="Row">
    <Grid.Container  display="flex" direction="Column">
    <h3>Current Theme:- {activeTheme}</h3>
   <ToggleButton type="button" onClick={()=>setActiveTheme(inactiveTheme)}>
      <ToggleThumb activeTheme={activeTheme}/>
      <span>🌙</span>
      <span>☀️</span>
    </ToggleButton>
  </Grid.Container>
  </Grid.Container>


  );

};

export default ThemeToggle;