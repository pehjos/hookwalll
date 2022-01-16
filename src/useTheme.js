import React,{useState,useEffect} from 'react';
import storage from 'local-storage-fallback'

export default function useTTheme(defaultTheme){
defaultTheme={mode:'light'}
const [theme,_setTheme]=useState(getInitialtheme);
    function getInitialtheme(){
        const savedtheme=storage.getItem('theme')
        return savedtheme?JSON.parse(savedtheme):defaultTheme;
        
        };
        useEffect(() => {
            storage.setItem('theme',JSON.stringify(theme))
           }, [theme])  ;  
return{
...theme,
setTheme:({setTheme,...theme})=>_setTheme(theme)

}
};