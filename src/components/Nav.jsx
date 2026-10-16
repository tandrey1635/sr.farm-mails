import {
	Row,
} from '@react-email/components'

import { data, styles } from '../styles.js'
import NavLink from './NavLink'


const Nav = () => {
	return (
		<Row style={styles.navLinkSection}>
			{data.map((navItem, i)=> {
				return <NavLink key={i} {...navItem} showDot={i > 0} />
			})}
		</Row>
	)

}

export default Nav