import { IconButton } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'

import './Appbar.scss'

const Appbar = () => {
  return (
    <div className="appbar">
      <div className="search">
        <InputBase className='input' placeholder="Search"/>
          <IconButton type='button'>
            <SearchIcon className='btn'/>
          </IconButton>
      </div>
      <div className="options">
        <IconButton type='button'>
          <NotificationsOutlinedIcon className='btn'/>
        </IconButton>
        <IconButton type='button'>
          <PersonOutlinedIcon className='btn'/>
        </IconButton>
      </div>
    </div>
  )
}

export default Appbar