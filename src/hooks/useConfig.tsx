import React from 'react'

const useConfig = () => {
  const currentYear = new Date().getFullYear()
  return {
    appName: 'React TypeScript Starter App',
    appMotto:
      'Powered by React, TypeScript, Router, Tailwind CSS, Font Awesome, Axios.',
    headerLinks: [
      { path: '/about', label: 'About' },
      { path: '/template-page', label: 'Template' },
      { path: '/login', label: 'Login', isFeatured: true },
      { path: '/sign-up', label: 'Sign up', isFeatured: true }
    ],
    heroLinks: [
      { path: '/about', label: 'Getting started' },
      { path: '/template-page', label: 'Template page' }
    ],
    footerLinks: [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/terms-of-use', label: 'Terms of Use' }
    ],
    copyright: (
      <span>
        © {currentYear} MIT License. Created with the&nbsp;
        <a
          href="https://github.com/ssokurenko/react-typescript-starter-app"
          target="_blank"
          rel="noreferrer"
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
