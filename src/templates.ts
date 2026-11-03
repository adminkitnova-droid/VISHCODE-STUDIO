import type { Project } from './types';
const starter = (name: string, framework: string, files: {path:string;content:string}[]): Project =>
  ({ id: crypto.randomUUID(), name, framework, updatedAt: Date.now(), files });
export function createTemplate(name: string, framework: string): Project {
  if (framework === 'HTML/CSS/JS') return starter(name, framework, [
    {path:'index.html',content:'<!doctype html>\\n<html><head><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>'+name+'</title><link rel=\"stylesheet\" href=\"style.css\"></head><body><main><h1>Welcome to '+name+'</h1><p>Your project is ready.</p><button id=\"hello\">Test interaction</button></main><script src=\"script.js\"></script></body></html>'},
    {path:'style.css',content:'*{box-sizing:border-box}body{margin:0;font-family:Arial,sans-serif;background:#eef4fb;color:#10243b;display:grid;min-height:100vh;place-items:center}main{padding:32px;text-align:center}button{background:#075eea;color:white;border:0;border-radius:12px;padding:14px 22px}'},
    {path:'script.js',content:\"document.querySelector('#hello')?.addEventListener('click',()=>alert('VISHCODE preview is working!'));\"}
  ]);
  return starter(name, framework, [
    {path:'package.json',content:JSON.stringify({name:name.toLowerCase().replace(/\\s+/g,'-'),version:'1.0.0',type:'module',scripts:{dev:'vite --host 0.0.0.0',build:'vite build'},dependencies:framework==='Ionic React'?{'@ionic/react':'latest','@ionic/react-router':'latest','ionicons':'latest',react:'latest','react-dom':'latest'}:{react:'latest','react-dom':'latest'},devDependencies:{vite:'latest','@vitejs/plugin-react':'latest',typescript:'latest'}},null,2)},
    {path:'index.html',content:'<!doctype html><html><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>'+name+'</title></head><body><div id=\"root\"></div><script type=\"module\" src=\"/src/main.tsx\"></script></body></html>'},
    {path:'src/main.tsx',content:\"import React from 'react';\\nimport {createRoot} from 'react-dom/client';\\nimport App from './App';\\nimport './style.css';\\ncreateRoot(document.getElementById('root')!).render(<App />);\"},
    {path:'src/App.tsx',content:\"export default function App(){return <main><h1>Welcome to \"+name+\"</h1><p>Your React project is ready in VISHCODE STUDIO.</p></main>}\"},
    {path:'src/style.css',content:'body{margin:0;font-family:Arial,sans-serif;background:#f2f6fa;color:#10243b}main{padding:32px}'}
  ]);
}