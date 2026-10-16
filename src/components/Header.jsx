import {
	Row,
	Column,
	Img,
	Link,
	Text,
} from '@react-email/components';

import { styles } from '../styles.js'


const Header = () => {
	return (
		<Row>
			<Column style={styles.mainLogoSectionRow}>
				<Link style={styles.mainLogoLink} href="https://sr.farm">
					<Img
						style={styles.mainLogoStyles}
						src={styles.mainLogoSrc.src}
						alt="Сердце России"
					/>
				</Link>
				<Text style={styles.mainLogoText}>
					С Любовью, заботой и вниманием
					<Img
						style={styles.mainLogoHeartStyles}
						src={styles.mainLogoHeartSrc.src}
					/>
				</Text>
			</Column>
		</Row>
	)
}

export default Header