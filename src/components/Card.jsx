import {
	Row,
	Column,
	Link,
	Img
} from '@react-email/components'

import { styles } from '../styles.js'


const Card = () => {
	return (
		<Row>
			<Column>
				<Link href="https://sr.farm" style={styles.link}>
					<Img style={styles.imgStyles} src={styles.imgSrc.src} alt='Кешбек 10%' />
				</Link>
			</Column>
		</Row>
	)
}

export default Card