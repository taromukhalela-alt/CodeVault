/*
 * AUTHENTICATION CONTEXT
 * Purpose: Global state management for authentication (user, tokens, auth status)
 * Connected To: App.jsx (provides auth context to entire app), authService.js (updates context on auth changes),
 *               pages/Login.jsx, pages/Register.jsx, hooks/useAuth.js (consumed by components)
 * Used By: Entire application for accessing and managing auth state
 * Provides: user, isAuthenticated, isLoading, login, register, logout functions
 */
