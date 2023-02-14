import LayoutCustom from '@/src/components/LayoutCustom'
import { store } from '@/src/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = React.useRef(new QueryClient())

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <LayoutCustom>
            <Component {...pageProps} />
          </LayoutCustom>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  )
}
