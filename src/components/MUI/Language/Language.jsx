import { useState } from 'react'
import Popover from '@mui/material/Popover'
import styles from './Language.module.scss'
import Button from '../../UI/Button/Button'
import { languageData } from './data'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DoneIcon from '@mui/icons-material/Done'

export default function Language() {
  const [value, setValue] = useState(languageData[0])
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClose = () => setOpen(false)
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpen(true)
  }
  const langBtn = (el) => {
    setValue(el)
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={(e) => handleClick(e)}>
        <img src={value.img} alt="Lang" />
        <ExpandMoreIcon />
      </Button>
      <Popover
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className={styles.btns}>
          {languageData.map((el, i) => {
            return (
              <button
                key={i}
                onClick={() => langBtn(el)}
                className={styles.langBtn}
              >
                {el.language}
                {value.language == el.language ? <DoneIcon /> : <></>}
              </button>
            )
          })}
        </div>
      </Popover>
    </div>
  )
}
