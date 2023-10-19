import React from 'react'

const ScrollDown = () => {
  return (
    <div className="mt-6 mx-auto absolute bottom-6">
      <a href="#about">
        <span className="text-sm">Scroll Down</span>
        <span className="block h-5 relative">
          <i class="dropdown-logo fa-solid fa-angle-down absolute left-[50%] translate-x-[-50%]"></i>
        </span>
      </a>
    </div>
  )
}

export default ScrollDown