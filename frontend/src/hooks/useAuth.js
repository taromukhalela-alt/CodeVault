/*
 * USE AUTH HOOK
 * Purpose: Custom hook for accessing authentication context
 * Connected To: context/AuthContext.js (accesses auth context), pages/Login.jsx, pages/Register.jsx
 * Used By: Components that need to access auth state without prop drilling
 * Returns: { user, isLoading, login, register, logout, isAuthenticated }
 */
