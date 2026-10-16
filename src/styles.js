const bodyBg = '#a59f9f1c'
const mainColor = '#349546'
const textColor = '#495057'
const textSecondColor = '#333'
const promoCodeColor = '#e9ecef'
const btnColor = '#fff'
const borderColor = '#dee2e6'


const data = [
	{
		href: "https://sr.farm/apteka/lekarstvennye-preparaty/",
		text: "Лекарства"
	},

	{
		href: "https://sr.farm/apteka/bad/",
		text: "БАД"
	},

	{
		href: "https://sr.farm/apteka/gigiena-i-kosmetika/",
		text: "Косметика и гигиена"
	},

	{
		href: "https://sr.farm/loyalty/",
		text: "Бонусная программа"
	},
]


// Пути к картинкам:
// - в dev используем "/static/..." (со слешем)
// - в production используем "static/..." (без слеша)
// Изменить вручную перед разработкой/сборкой

const styles = {
	body: {
		padding: 20,
		margin: 0,
		width: "100%",
		fontFamily: '"PT Sans", sans-serif'
	},

	mainSection: {
		background: bodyBg
	},

	section: {
		padding: "0 15px"
	},

	mainLogoSectionRow: {
		display: "block",
		textAlign: "center"
	},

	mainLogoLink: {
		display: "block",
		margin: "32px 0"
	},

	mainLogoStyles: {
		padding: "24px 0",
		display: "inline-block"
	},

	mainLogoSrc: {
		src: "/static/main-logo.png",
		// src: "static/main-logo.png"
	},

	mainLogoHeartStyles: {
		display: "inline-block",
		width: 14,
		height: 10,
		marginLeft: 5
	},

	mainLogoHeartSrc: {
		src: "/static/heart.png",
		// src: "static/heart.png"
	},

	mainLogoText: {
		padding: "10px 0",
		color: textColor,
		fontSize: 14,
		lineHeight: "20px",
		margin: 0,
		marginTop: 24,
		fontFamily: '"Inter", sans-serif',
		borderTop: `1px solid ${borderColor}`,
		borderBottom: `1px solid ${borderColor}`
	},

	navLinkSection: {
		marginTop: 24,
		padding: "0px 40px"
	},

	navLinkSectionColumn: {
		display: "inline-block"
	},

	navLinkDots: {
		display: "inline-block",
		margin: "0 12px",
		color: mainColor
	},

	navLink: {
		color: mainColor,
		fontSize: 16,
		fontWeight: 700,
		lineHeight: "24px"
	},

	h1: {
		color: textColor,
		margin: 0,
		marginTop: 60,
		fontSize: 28,
		fontWeight: 700,
		lineHeight: "36px"
	},

	text: {
		color: textSecondColor,
		margin: 0,
		marginTop: 32
	},

	link: {
		textDecoration: "none",
		padding: "0 15px",
		marginTop: 24
	},

	imgStyles: {
		width: "100%",
		height: 334,
		borderRadius: 10
	},

	imgSrc: {
		src: "/static/action.png",
		// src: "static/action.png"
	},

	buttonItem: {
		textAlign: "center"
	},

	button: {
		display: "inline-block",
		color: btnColor,
		background: mainColor,
		borderRadius: 140,
		padding: "16px 30px",
		fontSize: 18,
		fontWeight: 700,
		lineHeight: "24px",
		width: 370,
		marginTop: 48,
		textTransform: "uppercase"
	},

	promoCodeSection: {
		display: "inline-block",
		width: "100%",
		padding: "33px 0",
		background: promoCodeColor,
		margin: 0,
		marginTop: 32,
		borderRadius: 10,
		textAlign: "center"
	},

	h2: {
		color: textColor,
		margin: 0
	},

	promoCodeText: {
		fontSize: 14,
		lineHeight: "20px",
		color: textSecondColor,
		margin: 0,
		marginTop: 4
	},

	promoCodePersonal: {
		display: "inline-block",
		fontSize: 24,
		fontWeight: 700,
		lineHeight: "32px",
		background: btnColor,
		margin: 0,
		marginTop: 16,
		textTransform: "uppercase",
		padding: "16px 24px",
		borderRadius: 10,
		textDecoration: "underline",
		color: textColor
	},

	footer: {
		paddingBottom: 20
	},

	unsubscribeText: {
		padding: "16px 24px",
		lineHeight: "20px",
		fontSize: 14,
		margin: 0,
		marginTop: 84,
		background: promoCodeColor,
		borderRadius: 10,
		textAlign: "center",
		color: textSecondColor
	},

	unsubscribeLink: {
		textDecoration: "underline",
		color: textSecondColor,
		marginLeft: 5
	}
}

export { data, styles }