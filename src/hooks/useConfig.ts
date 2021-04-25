const useConfig = () => {
  return {
    appName: 'React TypeScript Starter App',
    appMotto: 'Powered by React, React Router, Tailwind CSS, Font Awesome 6',
    primaryColor: '#03A9F4',
    accentColor: '#FF5722',
    navLinks: [
      { path: '/', label: 'Home', isFeatured: false },
      { path: '/about', label: 'About', isFeatured: false },
      { path: '/login', label: 'Login', isFeatured: true },
      { path: '/sign-up', label: 'Sign up', isFeatured: true }
    ]
  }
}

export default useConfig
