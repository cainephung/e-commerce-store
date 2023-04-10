import { Layout } from '@/components'
import '@/styles/globals.css'
import React from 'react'
// import { Layout } from '../components';


function App({ Component, pageProps }) {
  return (
    <Layout><Component {...pageProps} /></Layout>
  )
}

// import React from 'react';
// import { Toaster } from 'react-hot-toast';

// import { Layout } from '../components';
// import '../styles/globals.css';
// import { StateContext } from '../context/StateContext';

// function MyApp({ Component, pageProps }) {
//   return (
//     <StateContext>
//       <Layout>
//         <Toaster />
//         <Component {...pageProps} />
//       </Layout>
//     </StateContext>
//   )
// }

export default App