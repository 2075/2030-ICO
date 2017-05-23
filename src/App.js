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
// ICO DATE: JUNE 27
// TIME REMAINING: days, hours, minutes
// FUNDRAISING GOAL: 10,000,000 CHF
// FUNDED: $X
// NUMBER OF DONATIONS: X
// AVERAGE PER DONATION: $X
// STRETCH GOAL: 2 MILLION CHF (SPECIAL PROJECT)

const items = [
	{ color: 'blue', label: 'ICO Date', value: 'JUNE 27' },
	{ color: 'violet', label: 'Fundraising Goal', value: '10,000,000 CHF' },
	{ color: 'red', label: 'Funded', value: '0' },
	{ color: 'orange', label: 'Donations', value: '25,452 CHF' },
	{ color: 'orange', label: 'Average per Donations', value: '500 CHF' },
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

		const sr_head = {
			origin: 'bottom',
			duration: 1000,
			delay: 1000,
			distance: '0px',
			scale: 1,
			easing: 'ease',
		}

		const sr_config = {
			origin: 'bottom',
			duration: 1000,
			delay: 250,
			distance: '100px',
			scale: 1,
			easing: 'ease',
		}

		sr.reveal( this.refs.box0, sr_head )
		sr.reveal( this.refs.box1, sr_config )
		sr.reveal( this.refs.box2, sr_config )
		sr.reveal( this.refs.box3, sr_config )
		sr.reveal( this.refs.box4, sr_config )
		sr.reveal( this.refs.box5, sr_config )
		sr.reveal( this.refs.box6, sr_config )
		sr.reveal( this.refs.box7, sr_config )
		sr.reveal( this.refs.box8, sr_head )
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions)
	}

	updateWindowDimensions = () => this.setState({
		stageWidth: document.documentElement.clientWidth,
		stageHeight: document.documentElement.clientHeight
		// stageHeight: document.getElementsByClassName("App")[0].clientHeight
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

			<div className='landing-bottom'>

				<div className='RenderPolygons'>
					<RenderPolygons
						width={stageWidth}
						height={stageHeight}
						inverted
						/>
				</div>

				<div className='App'>

					<Container>

						<Menu pointing secondary>
							<Menu.Item name='home' active={activeNavItem === 'home'} onClick={this.handleItemClick} />
							<Menu.Item name='How To Buy' active={activeNavItem === 'how-to-buy'} onClick={this.handleItemClick} />
							<Menu.Item name='Prospectus' active={activeNavItem === 'prospectus'} onClick={this.handleItemClick} />
							<Menu.Item name='Whitepaper' active={activeNavItem === 'whitepaper'} onClick={this.handleItemClick} />
							<Menu.Item name='Press' active={activeNavItem === 'press'} onClick={this.handleItemClick} />
							<Menu.Item name='FAQ' active={activeNavItem === 'faq'} onClick={this.handleItemClick} />
							<Menu.Item name='About' active={activeNavItem === 'about'} onClick={this.handleItemClick} />

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

						<Segment ref='box0'>

							<Image className='spaceglow' src='/svg/pillar.svg' alt='PLR ICO' size='large' centered />

							<Segment textAlign='center'>
								<div  className='matrixfont introtext'>
									Pillar is an open-source bridge between the world of centralized
									electronic money and the decentralized world of cryptofinance.
								</div>
							</Segment>

							<Segment textAlign='center'>
								<Counter />
							</Segment>

							<Segment textAlign='center'>
								<div  className='matrixfont introtext'>
									Pillar and its associated utility token will reduce the risks
									of data concentration and accelerate innovation in banking,
									ecommerce, payments, and more.
								</div>
							</Segment>

						</Segment>

						{
							// stats
						}
						<div>
							<Segment>
								<div className='landing-stats'>
									<Statistic.Group items={items} />
								</div>
							</Segment>
						</div>

						<div ref= 'box1'>
							<Divider horizontal>What we do</Divider>

							<Segment>

								<Grid stackable divided='vertically'>
									<Grid.Row columns={1}>
										<Grid.Column>
											<Container text>
											<p>	The Pillar system will connect today’s software to all blockchains using a set of APIs and a native token called the Pillar. Our mission is to help today’s cloud-based software transition toward the decentralized systems of the future.
											</p>
											</Container>
    									</Grid.Column>
									</Grid.Row>
{
									// <Grid.Row columns={3}>
									// 	<Grid.Column>
									// 		<Image src='/img/paragraph.png' />
									// 	</Grid.Column>
									// 	<Grid.Column>
									// 		<Image src='/img/paragraph.png' />
									// 	</Grid.Column>
									// 	<Grid.Column>
									// 		<Image src='/img/paragraph.png' />
									// 	</Grid.Column>
									// </Grid.Row>
}
								</Grid>

							</Segment>
						</div>

						<div  ref='box2'>
							<Divider horizontal>Products + Roadmap</Divider>
							<Segment>
								<Grid stackable celled>
									<Grid.Row columns={3}>
										<Grid.Column>
											<Header size="medium">Exchange </Header>
											<p>An exchange using the Pillar platform has all currencies and blockchains available and can translate from any currency to any other. Rather than reinventing this wheel, transactions are paid it in Pillars.</p>
										</Grid.Column>
										<Grid.Column>
											<Header size="medium">Retail</Header>
											<p>Any ecommerce website can accept ANY crypto-token or cryptocurrency for their products, and they'll get back the currency of their choice. They can commit to the APIs but not be locked into any particular exchange.</p>
										</Grid.Column>
										<Grid.Column>
											<Header size="medium">Payment Service Providers</Header> <p>Our system turns any credit or debit card into a token card that can pay or receive in any cryptocurrency.</p>
										</Grid.Column>
									</Grid.Row>
									<Grid.Row columns={3}>
										<Grid.Column>
											<Header size="medium">Internet of Things</Header>
											<p>Many connected things will connect through blockchains and other decentralized ledgers. Using our APIs, any software will be able to interact with these sensors and devices.</p>
										</Grid.Column>
										<Grid.Column>
											<Header size="medium">Settlement</Header>
											<p>Institutions can use our system to settle on any blockchain.</p>
										</Grid.Column>
										<Grid.Column>
											<Header size="medium">CryptX Index token</Header>
											<p>This is our commercial showcase project we plan to launch using the funding we get from the crowdsale. It will prime the pump for future adoption of the platform and its token.</p>
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</Segment>
						</div>


						<div ref='box3'>
					        <Divider horizontal>Partners</Divider>

							<Segment>
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
					        <Divider horizontal>Core Team</Divider>

							<Segment>

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
					        <Divider horizontal>Ambassadors & Associates</Divider>

							<Segment>

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
					        <Divider horizontal>Frequently asked Questions</Divider>

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

{
						// <div ref='box7'>
						// 	<Segment>
						// 		<div className='landing-stats'>
						// 			<Statistic.Group items={items} />
						// 		</div>
						// 	</Segment>
						// </div>
}

						<div className='bottom-navigation' ref='box8'>
						<Segment>

							<Grid stackable divided='vertically'>
								<Grid.Row columns={4}>
									<Grid.Column>
										<Header color="grey" as='h3' attached='top'>Meta</Header>
										<List>
											<List.Item icon='users' content='Semantic UI' />
											<List.Item icon='marker' content='New York, NY' />
											<List.Item icon='mail' content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>} />
											<List.Item icon='linkify' content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>} />
										</List>
									</Grid.Column>
									<Grid.Column>
										<Header color="grey" as='h3' attached='top'>Legal</Header>
										<List>
											<List.Item icon='users' content='Semantic UI' />
											<List.Item icon='marker' content='New York, NY' />
											<List.Item icon='mail' content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>} />
											<List.Item icon='linkify' content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>} />
										</List>
									</Grid.Column>
									<Grid.Column>
										<Header color="grey" as='h3' attached='top'>News</Header>
										<List>
											<List.Item icon='users' content='Semantic UI' />
											<List.Item icon='marker' content='New York, NY' />
											<List.Item icon='mail' content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>} />
											<List.Item icon='linkify' content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>} />
										</List>
									</Grid.Column>
									<Grid.Column>
										<Header color="grey" as='h3' attached='top'>Connect</Header>
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

					<div className='landing-bottom' />

				</div>

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
