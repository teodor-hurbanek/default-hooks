import React, { useEffect, useState } from 'react'
import Select from '../UI/Select'
import { fetchBio, User } from '@/utils/api'

const data = ['Alice', 'Bob', 'John']

const Profile = () => {
  const [userName, setUserName] = useState('Alice')
  const [bio, setBio] = useState<string | undefined>(undefined)

  useEffect(() => {
    const startFetching = async () => {
      setBio(undefined)
      const result = await fetchBio(userName)
      if (!ignore) {
        setBio(result)
      }
    }

    let ignore = false
    startFetching()
    return () => {
      ignore = true
    }
  }, [userName])

  const handleUserNameChange = (e: any) => {
    setUserName(e.target.value)
  }

  return (
    <div>
      <Select data={data} selectedValue={userName} onChange={handleUserNameChange} />
      <p>
        <i>{bio ?? 'Loading...'}</i>
      </p>
    </div>
  )
}

export default Profile
