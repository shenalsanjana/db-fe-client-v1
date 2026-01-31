import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import {HelmetProvider} from 'react-helmet-async';
import {BrowserRouter} from 'react-router-dom';
import {AuthGuard} from 'src/auth/auth-guard.tsx'
import {Provider} from 'react-redux'
import store from './state/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<HelmetProvider>
			<BrowserRouter>
				<React.Suspense>
					<AuthGuard>
						<App/>
					</AuthGuard>
				</React.Suspense>
			</BrowserRouter>
		</HelmetProvider>
	</Provider>
)
