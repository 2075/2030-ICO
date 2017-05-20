import React, { Component } from 'react'
import PropTypes from 'prop-types'

import sr from './components/ScrollReveal'
import Counter from './components/Counter'
// import SignUpForm from './components/SignUpForm'

// semantic ui components
import {
	Menu,
	Container,
	Segment,
	Grid,
	Divider,
	Header,
	Image,
	Message,
	Icon,
	Statistic,
	Accordion,
	List,
	Card
} from 'semantic-ui-react'

// threejs eyecandy
import RenderPolygons from './components/Polygons'

// content for the bottom stats display
//
const items = [
	{ color: 'blue', label: 'Downloads', value: '3,200' },
	{ color: 'violet', label: 'Likes', value: '10,000' },
	{ color: 'red', label: 'Faves', value: '22' },
	{ color: 'orange', label: 'Views', value: '31,200' },
	{ color: 'yellow', label: 'Members', value: '22' },
]

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			stageHeight: props.stageHeight,
			stageWidth: props.stageWidth,
			activeNavItem: props.activeNavItem,
			session: props.session,
			notification: props.notification
		}
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
	}

	componentDidMount() {
		this.updateWindowDimensions()
		window.addEventListener('resize', this.updateWindowDimensions)

		const sr_config = {
			origin: 'bottom',
			duration: 1000,
			delay: 250,
			distance: '100px',
			scale: 1,
			easing: 'ease',
		}

		sr.reveal( this.refs.box0, sr_config )
		sr.reveal( this.refs.box1, sr_config )
		sr.reveal( this.refs.box2, sr_config )
		sr.reveal( this.refs.box3, sr_config )
		sr.reveal( this.refs.box4, sr_config )
		sr.reveal( this.refs.box5, sr_config )
		sr.reveal( this.refs.box6, sr_config )
		sr.reveal( this.refs.box7, sr_config )
		sr.reveal( this.refs.box8, sr_config )
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions)
	}

	updateWindowDimensions = () => this.setState({
		stageWidth: window.innerWidth,
		stageHeight: window.innerHeight
	})

	handleItemClick = (e, { name }) => this.setState({
		activeNavItem: name
	})

	handleLoginClick = (e, { name }) => this.setState({
		sessionState: '1'
	})

	handleLogoutClick = (e, { name }) => this.setState({
		sessionState: '-1'
	})

	render() {

		const {
			activeNavItem,
			session,
			notification,
			stageWidth,
			stageHeight
		} = this.state

		return (

			<div className='App'>

				<div className='RenderPolygons'>
					<RenderPolygons
						width={stageWidth}
						height={stageHeight}
						inverted
						/>
				</div>

				<div className='landing-bottom'>
				</div>

				<Container>

					<Menu pointing inverted secondary>
						<Menu.Item name='home' active={activeNavItem === 'home'} onClick={this.handleItemClick} />
						<Menu.Item name='messages' active={activeNavItem === 'messages'} onClick={this.handleItemClick} />
						<Menu.Item name='friends' active={activeNavItem === 'friends'} onClick={this.handleItemClick} />
						<Menu.Menu position='right'>
							{
								session &&
								<Menu.Item name='logout' active={activeNavItem === 'logout'} onClick={this.handleLogoutClick} />
							}
							{
								!session &&
								<Menu.Item name='login' active={activeNavItem === 'login'} onClick={this.handleLoginClick} />
							}
						</Menu.Menu>
					</Menu>

					{ notification &&
						<Message color={notification.color}>
							<Icon name={notification.icon} loading />
							<Message.Content>
								<Message.Header>{notification.header}</Message.Header>
									{notification.content}
							</Message.Content>
						</Message>
					}

					<Segment ref='box0' className='landing-top' inverted>

						<Image src="/svg/pillar.svg" alt="PLR ICO" size='large' centered />

						<Segment textAlign='center' inverted>
							<div  className='matrixfont introtext'>
								Pillar is an open-source bridge between the world of centralized
								electronic money and the decentralized world of cryptofinance.
							</div>
						</Segment>

						<Segment textAlign='center' inverted>
							<Counter />
						</Segment>

						<Segment textAlign='center' inverted>
							<div  className='matrixfont introtext'>
								Pillar and its associated utility token will reduce the risks
								of data concentration and accelerate innovation in banking,
								ecommerce, payments, and more.
							</div>
						</Segment>

					</Segment>

					<div ref= 'box1'>
						<Divider horizontal inverted>What we do</Divider>

						<Segment inverted>

							<Grid stackable divided='vertically'>
								<Grid.Row columns={2}>
									<Grid.Column>
										<Image src='/img/paragraph.png' />
									</Grid.Column>
									<Grid.Column>
										<Image src='/img/paragraph.png' />
									</Grid.Column>
								</Grid.Row>

								<Grid.Row columns={3}>
									<Grid.Column>
										<Image src='/img/paragraph.png' />
									</Grid.Column>
									<Grid.Column>
										<Image src='/img/paragraph.png' />
									</Grid.Column>
									<Grid.Column>
										<Image src='/img/paragraph.png' />
									</Grid.Column>
								</Grid.Row>
							</Grid>

						</Segment>
					</div>

					<div  ref='box2'>
						<Divider horizontal inverted>Products + Roadmap</Divider>

						<Segment inverted>

							<Grid celled >
								<Grid.Row columns={4}>
									<Grid.Column>
										<Image src='/img/paragraph.png' />
									</Grid.Column>
									<Grid.Column>
										<Image src='/img/paragraph.png' />
									</Grid.Column>
									<Grid.Column>
										<Image src='/img/paragraph.png' />
									</Grid.Column>
									<Grid.Column>
										<Image src='/img/paragraph.png' />
									</Grid.Column>
								</Grid.Row>
								<Grid.Row columns={4}>
									<Grid.Column>
										<Image src='/img/paragraph.png' />
									</Grid.Column>
									<Grid.Column>
										<Image src='/img/paragraph.png' />
									</Grid.Column>
									<Grid.Column>
										<Image src='/img/paragraph.png' />
									</Grid.Column>
									<Grid.Column>
										<Image src='/img/paragraph.png' />
									</Grid.Column>
								</Grid.Row>
							</Grid>

						</Segment>
					</div>


					<div ref='box3'>
				        <Divider horizontal inverted>Partners</Divider>

						<Segment inverted>
							<Header as='h2' icon textAlign='center'>
								<Icon name='users' circular />
								<Header.Content>
									Friends
								</Header.Content>
							</Header>
							<Image centered size='large' src='/img/centered-paragraph.png' />
						</Segment>
					</div>

					<div ref='box4'>
				        <Divider horizontal inverted>Core Team</Divider>

						<Segment inverted>

							<Card.Group itemsPerRow={4}>
								<Card>
									<Card.Content>
										<Card.Header>Matthew Harris</Card.Header>
										<Card.Meta>Co-Worker</Card.Meta>
										<Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
									</Card.Content>
								</Card>

								<Card>
									<Card.Content>
										<Card.Header content='Jake Smith' />
										<Card.Meta content='Musicians' />
										<Card.Description content='Jake is a drummer living in New York.' />
									</Card.Content>
								</Card>

								<Card>
									<Card.Content
										header='Elliot Baker'
										meta='Friend'
										description='Elliot is a music producer living in Chicago.'
										/>
								</Card>

								<Card
									header='Jenny Hess'
									meta='Friend'
									description='Jenny is a student studying Media Management at the New School'
									/>
								<Card>
									<Card.Content>
										<Card.Header>Matthew Harris</Card.Header>
										<Card.Meta>Co-Worker</Card.Meta>
										<Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
									</Card.Content>
								</Card>

								<Card>
									<Card.Content>
										<Card.Header content='Jake Smith' />
										<Card.Meta content='Musicians' />
										<Card.Description content='Jake is a drummer living in New York.' />
									</Card.Content>
								</Card>

								<Card>
									<Card.Content
										header='Elliot Baker'
										meta='Friend'
										description='Elliot is a music producer living in Chicago.'
										/>
								</Card>

								<Card
									header='Jenny Hess'
									meta='Friend'
									description='Jenny is a student studying Media Management at the New School'
									/>
							</Card.Group>

						</Segment>
					</div>

					<div ref='box5'>
				        <Divider horizontal inverted>Ambassadors & Associates</Divider>

						<Segment inverted>

							<Card.Group stackable itemsPerRow={4}>
								<Card>
									<Card.Content>
										<Card.Header>Matthew Harris</Card.Header>
										<Card.Meta>Co-Worker</Card.Meta>
										<Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
									</Card.Content>
								</Card>

								<Card>
									<Card.Content>
										<Card.Header content='Jake Smith' />
										<Card.Meta content='Musicians' />
										<Card.Description content='Jake is a drummer living in New York.' />
									</Card.Content>
								</Card>

								<Card>
									<Card.Content
										header='Elliot Baker'
										meta='Friend'
										description='Elliot is a music producer living in Chicago.'
										/>
								</Card>

								<Card
									header='Jenny Hess'
									meta='Friend'
									description='Jenny is a student studying Media Management at the New School'
									/>
								<Card>
									<Card.Content>
										<Card.Header>Matthew Harris</Card.Header>
										<Card.Meta>Co-Worker</Card.Meta>
										<Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
									</Card.Content>
								</Card>

								<Card>
									<Card.Content>
										<Card.Header content='Jake Smith' />
										<Card.Meta content='Musicians' />
										<Card.Description content='Jake is a drummer living in New York.' />
									</Card.Content>
								</Card>

								<Card>
									<Card.Content
										header='Elliot Baker'
										meta='Friend'
										description='Elliot is a music producer living in Chicago.'
										/>
								</Card>

								<Card
									header='Jenny Hess'
									meta='Friend'
									description='Jenny is a student studying Media Management at the New School'
									/>
							</Card.Group>

						</Segment>

					</div>

					<div ref='box6'>
				        <Divider horizontal inverted>Frequently asked Questions</Divider>

						<Segment>
							<Accordion>
								<Accordion.Title>
									<Icon name='dropdown' />
									What is a dog?
								</Accordion.Title>
								<Accordion.Content>
									<p>
									A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
									{' '}it can be found as a welcome guest in many households across the world.
									</p>
								</Accordion.Content>
								<Accordion.Title>
									<Icon name='dropdown' />
									What kinds of dogs are there?
								</Accordion.Title>
								<Accordion.Content>
									<p>
									There are many breeds of dogs. Each breed varies in size and temperament.
									{' '}Owners often select a breed of dog that they find to be compatible
									with their own lifestyle and desires from a companion.
									</p>
								</Accordion.Content>
								<Accordion.Title>
									<Icon name='dropdown' />
									How do you acquire a dog?
								</Accordion.Title>
								<Accordion.Content>
									<p>
									Three common ways for a prospective owner to acquire a dog is from pet shops,
									{' '}private owners, or shelters.
									</p>
									<p> A pet shop may be the most convenient way to buy a dog.
									{' '}Buying a dog from a private owner allows you to assess the pedigree and
									{' '}upbringing of your dog before choosing to take it home. Lastly, finding your dog
									{' '}from a shelter, helps give a good home to a dog who may not find one so readily.
									</p>
								</Accordion.Content>
							</Accordion>
	  					</Segment>
					</div>

					<div ref='box7'>

						<Segment inverted>

							<div className='landing-stats'>

								<Statistic.Group items={items} />

							</div>

						</Segment>
					</div>

					<div ref='box8'>
					<Segment className='bottom-navigation' inverted>

						<Grid stackable divided='vertically'>
							<Grid.Row columns={4}>
								<Grid.Column>
									<Header inverted color="grey" as='h3' attached='top'>Meta</Header>
									<List>
										<List.Item icon='users' content='Semantic UI' />
										<List.Item icon='marker' content='New York, NY' />
										<List.Item icon='mail' content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>} />
										<List.Item icon='linkify' content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>} />
									</List>
								</Grid.Column>
								<Grid.Column>
									<Header inverted color="grey" as='h3' attached='top'>Legal</Header>
									<List>
										<List.Item icon='users' content='Semantic UI' />
										<List.Item icon='marker' content='New York, NY' />
										<List.Item icon='mail' content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>} />
										<List.Item icon='linkify' content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>} />
									</List>
								</Grid.Column>
								<Grid.Column>
									<Header inverted color="grey" as='h3' attached='top'>News</Header>
									<List>
										<List.Item icon='users' content='Semantic UI' />
										<List.Item icon='marker' content='New York, NY' />
										<List.Item icon='mail' content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>} />
										<List.Item icon='linkify' content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>} />
									</List>
								</Grid.Column>
								<Grid.Column>
									<Header inverted color="grey" as='h3' attached='top'>Connect</Header>
									<List>
										<List.Item icon='linkedin' content={<a href='https://www.linkedin.com/company-beta/13251727/'>LinkedIn</a>} />
										<List.Item icon='facebook' content={<a href='https://facebook.com/2030AG'>Facebook</a>} />
										<List.Item icon='twitter' content={<a href='https://twitter.com/2030AG'>Twitter</a>} />
										<List.Item icon='github' content={<a href='https://github.com'>GitHub</a>} />
									</List>
								</Grid.Column>
							</Grid.Row>
						</Grid>

					</Segment>
					</div>

				</Container>

			</div>

		)
	}
}

App.propTypes = {
	activeNavItem: PropTypes.string,
	stageHeight: PropTypes.number,
	stageWidth: PropTypes.number,
	notification: PropTypes.object,
	session: PropTypes.string,
	statDisplay: PropTypes.array
}

App.defaultProps = {
	stageHeight: 0,
	stageWidth: 0,
	activeNavItem:'home',
	session:'-1',
	statDisplay: [ 0,0,0,0,0 ],
	notification:
	null
	// {
	// 	color: 'green',
	// 	icon: 'circle notched',
	// 	header: 'This is a message',
	// 	content: 'Some content may show up here.'
	// }
}

export default App
