import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Zest from 'react-zest';

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
	Card
} from 'semantic-ui-react'

import RenderPolygons from './components/Polygons'

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

{
				<div className='RenderPolygons'>
					<RenderPolygons
						width={stageWidth}
						height={stageHeight}
						inverted
						/>
				</div>
}
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

					<Segment className='landing-top' inverted>

						<Image src='/main-logo.png' size='large' centered />

						<Image src='/header-1.png' centered />

						<Image src='/timer.png' centered />

						<Image src='/header-2.png' centered />

					</Segment>

			        <Divider horizontal inverted>What we do</Divider>

					<Segment className='landing-top' inverted>

						<Grid stackable divided='vertically'>
							<Grid.Row columns={2}>
								<Grid.Column>
									<Image src='/paragraph.png' />
								</Grid.Column>
								<Grid.Column>
									<Image src='/paragraph.png' />
								</Grid.Column>
							</Grid.Row>

							<Grid.Row columns={3}>
								<Grid.Column>
									<Image src='/paragraph.png' />
								</Grid.Column>
								<Grid.Column>
									<Image src='/paragraph.png' />
								</Grid.Column>
								<Grid.Column>
									<Image src='/paragraph.png' />
								</Grid.Column>
							</Grid.Row>
						</Grid>

					</Segment>

			        <Divider horizontal inverted>Partners</Divider>

					<Segment inverted>
						<Header as='h2' icon textAlign='center'>
							<Icon name='users' circular />
							<Header.Content>
								Friends
							</Header.Content>
						</Header>
						<Image centered size='large' src='/centered-paragraph.png' />
					</Segment>

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

			        <Divider horizontal inverted>Ambassadors & Associates</Divider>

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


					<Segment className='landing-bottom' inverted>
							<Statistic.Group items={items} />

					</Segment>

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
	session: PropTypes.string
}

App.defaultProps = {
	stageHeight: 0,
	stageWidth: 0,
	activeNavItem:'home',
	session:'-1',
	notification: null
	// {
	// 	color: 'green',
	// 	icon: 'circle notched',
	// 	header: 'This is a message',
	// 	content: 'Some content may show up here.'
	// }
}

export default App
