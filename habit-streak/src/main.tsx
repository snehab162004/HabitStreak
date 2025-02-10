import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

const rootElement = document.getElementById("root");

if(!rootElement) {
  throw new Error("Root element not found");
}

// const customTheme = extendTheme({});

createRoot(rootElement as HTMLElement).render(
  <StrictMode>
    <ChakraProvider>
    <BrowserRouter>
       <App />
    </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
