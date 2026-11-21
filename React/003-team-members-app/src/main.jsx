import {createRoot} from 'react-dom/client'
import './App.css'
import { StrictMode } from 'react'

const rootElement = document.querySelector('#root')

const teamMembersData = [
	{
		id: 0,
		name: "Chris Coyier",
		description: "Chris is a front-end developer and designer. He writes a bunch of HTML, CSS, and JavaScript and shakes the pom-poms for CodePen.",
		image: "https://assets.codepen.io/3/internal/avatars/users/default.png?fit=crop&format=auto&height=120&width=120",
		codepenLink: "https://codepen.io/chriscoyier/",
		codepenName: "@chriscoyier",
		isCofunder: true
	},
	{
		id: 1,
		name: "Alex Vazquez",
		description: "Alex is a full stack developer. Alex does JavaScript development for CodePen, both front end and back, and just about everything else.",
		image: "https://assets.codepen.io/2/internal/avatars/users/default.png?height=120&width=120",
		codepenLink: "https://codepen.io/quezo/",
		codepenName: "@quezo",
		isCofunder: true
	},
	{
		id: 2,
		name: "Marie Mosley",
		description: "Marie wears a lot of hats. She is our documentation lead, customer support maestra, editor, and community manager.",
		image: "https://assets.codepen.io/652/internal/avatars/users/default.png?height=120&width=120",
		codepenLink: "https://codepen.io/mariemosley/",
		codepenName: "@mariemosley",
		isCofunder: false
	},
	{
		id: 3,
		name: "Stephen Shaw",
		description: "Stephen is a designer/developer residing in Houston. He likes to build animations with CSS & JavaScript.",
		image: "https://assets.codepen.io/39255/internal/avatars/users/default.png?height=120&width=120",
		codepenLink: "https://codepen.io/shshaw/",
		codepenName: "@shshaw",
		isCofunder: false
	},
]

// const App = () => <h1>Hello App</h1>

function App() {
	return (
		<div className="content">
			<Header />
			<TeamMembers />
		</div>
	)
}

function Header() {
	return (
		<div className="title">
			<h1>Team Members</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
		</div>
    ) 	
}

function TeamMembers() {
	return (
		<ul className="team">
			{
				/* teamMembersData.map((index, num) => (
					<Member 
						key = {num}
						name = {index.name}
						description = {index.description}
						image = {index.image}
						codepenLink = {index.codepenLink}
						codepenName = {index.codepenName}
						isCoFunder = {index.isCoFunder}
					/>
				)) */
				teamMembersData.map((index) => (

					<Member key={index.id} props={index} />
				))
			}
		</ul>
	)
}

/* function Member({name, description, image, codepenLink, codepenName, isCoFunder}) {
	return (
		<li className={`member ${isCoFunder} ? co-funder : `}>
			<div className="thumb"><img src={image}/></div>
			<div className="description">
				<h3>{name}</h3>
				<p>{description}
					<br/>
					<a href={codepenLink}>{codepenName}</a></p>
			</div>
		</li>
	)
} */

// obje alma
function Member({props}) {
	return (
		<li className={`member ${props.isCoFunder ? 'co-funder' : ''}`}>
			<div className="thumb"><img src={props.image}/></div>
			<div className="description">
				<h3>{props.name}</h3>
				<p>{props.description}
					<br/>
					<a href={props.codepenLink}>{props.codepenName}</a></p>
			</div>
		</li>
	)
}


createRoot(rootElement).render(
	<StrictMode>
		<App />
	</StrictMode>
)