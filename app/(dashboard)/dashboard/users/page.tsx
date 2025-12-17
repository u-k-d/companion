import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <ul className="mt-10">
        <Link href="/dashboard/users/1"><li>User 1</li></Link>
        <Link href="/dashboard/users/1"><li>User 2</li></Link>
        <Link href="/dashboard/users/1"><li>User 3</li></Link>
      </ul>
    </div>
  )
}

export default page
