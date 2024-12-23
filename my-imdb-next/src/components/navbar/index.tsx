import React from 'react'
import NavbarItem from '../navbar-item'

const NavBar = () => {
  return (
    <div className='flex dark:bg-amber-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6'><NavbarItem title="Trending" params="fetchTrending" />
      <NavbarItem title="Top Rated" params="fetchTopRated" />
    </div>
  )
}

export default NavBar