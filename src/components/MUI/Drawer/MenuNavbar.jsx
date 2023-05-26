import styles from './MenuNavbar.module.scss'
import { Fragment, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import { Link } from 'react-router-dom'

export default function MenuNavbar() {
  const [state, setState] = useState(false)
  const list = () => (
    <Box>
      <List>
        <div className={styles.top}>
          <span className={styles.top__span}>Меню</span>
          <button className={styles.closeBtn} onClick={() => setState(false)}>
            <CloseIcon />
          </button>
        </div>
        <Divider />
        {[
          { name: 'Филиалы', to: 'filials' },
          { name: 'О нас', to: 'about' },
          { name: 'Контакты', to: 'contacts' },
        ].map((el, index) => (
          <ListItem key={el.name} disablePadding className={styles.listItem}>
            <Link to={el.to} className={styles.link}>
              <ListItemText primary={el.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      <Fragment>
        <button className={styles.menuBtn} onClick={() => setState(true)}>
          <MenuIcon sx={{ fontSize: 30 }} />
        </button>
        <Drawer open={state} onClose={() => setState(false)}>
          {list()}
        </Drawer>
      </Fragment>
    </div>
  )
}
