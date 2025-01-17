//src/main.jsx

import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { I18nextProvider } from 'react-i18next'

// Context Providers
import { ThemeProvider } from './context/theme/ThemeProvider'
import { AppProvider } from './context/AppContext'

// i18n configuration
import i18n from './i18n/config'

// Styles
import './styles/globals.css'
import './index.css'

// Main App Component
import App from './App'

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Application Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Oops! Algo deu errado
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Pedimos desculpas pelo inconveniente. Nossa equipe foi notificada e está trabalhando na solução.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-primary"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Loading Component
const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="text-center"
    >
      <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-gray-600 dark:text-gray-300">Carregando...</p>
    </motion.div>
  </div>
)

// Root Component
const Root = () => (
  <React.StrictMode>
    <ErrorBoundary>
      <React.Suspense fallback={<LoadingScreen />}>
        <HelmetProvider>
          <I18nextProvider i18n={i18n}>
            <BrowserRouter>
              <ThemeProvider>
                <AppProvider>
                  <AnimatePresence mode="wait">
                    <App />
                  </AnimatePresence>
                </AppProvider>
              </ThemeProvider>
            </BrowserRouter>
          </I18nextProvider>
        </HelmetProvider>
      </React.Suspense>
    </ErrorBoundary>
  </React.StrictMode>
)

// Initialize the application
const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(<Root />)
} else {
  console.error('Failed to find the root element')
}

// Enable Hot Module Replacement (HMR)
if (import.meta.hot) {
  import.meta.hot.accept()
}