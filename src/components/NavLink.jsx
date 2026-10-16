import {
	Column,
	Text,
	Link,
} from '@react-email/components'

import { styles } from '../styles.js'


const NavLink = ({ href, text, showDot }) => {
	return (
		<Column style={styles.navLinkSectionColumn}>
			{showDot && <Text style={styles.navLinkDots}>•</Text>}
			<Link
				style={styles.navLink}
				href={href}
			>
				{text}
			</Link>
		</Column>
	)
}

export default NavLink