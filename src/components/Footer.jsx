import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="pb-2 mt-2 text-center text-slate-400">
        <h3>&copy; 2023. Running on { process.env.APP_ENV }</h3>
      </div>
    </footer>
  )
}

export default Footer