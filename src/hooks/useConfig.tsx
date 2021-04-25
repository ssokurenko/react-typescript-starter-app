import React from 'react'

const useConfig = () => {
  const currentYear = new Date().getFullYear()
  return {
    appName: 'React TypeScript Starter App',
    appMotto: 'Powered by React, React Router, Tailwind CSS, Font Awesome 6',
    primaryColor: '#03A9F4',
    accentColor: '#FF5722',
    headerLinks: [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/login', label: 'Login', isFeatured: true },
      { path: '/sign-up', label: 'Sign up', isFeatured: true }
    ],
    footerLinks: [
      { path: '/about', label: 'About' },
      { path: '/terms-of-use', label: 'Terms of Use' }
    ],
    copyright: (
      <span>
        © {currentYear} All Rights Reserved. Created with the&nbsp;
        <a
          href="https://github.com/ssokurenko/react-typescript-starter-app"
          target="_blank"
          className="font-bold hover:underline"
        >
          React Starter
        </a>
        &nbsp;template.
      </span>
    )
  }
}

export default useConfig
