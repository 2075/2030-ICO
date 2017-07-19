import React, { Component } from 'react';
import PropTypes from 'prop-types';

const _ss = 1000;
const _mm = _ss * 60;
const _hh = _mm * 60;
const _dd = _hh * 24;

class Counter extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			endDate: new Date('06/27/2017 12:00 AM'),
			date: new Date(),
			remaining: {
				dd:'',
				hh:'',
				mm:'',
				ss:'',
				ms:'',
				complete:''
			},
			note: ''
		}
	}

	renderRemaining() {

		const now = new Date();
		const distance = this.state.endDate - now;

		if (distance < 0) {
			clearInterval( this.timerID );
			this.setState({
				note: 'EXPIRED!'
			})
			return;
		}

		let dd = ('00' + Math.floor(distance / _dd) ).slice(-2),
			hh = ('00' + Math.floor((distance % _dd) / _hh)).slice(-2),
			mm = ('00' + Math.floor((distance % _hh) / _mm)).slice(-2),
			ss = ('00' + Math.floor((distance % _mm) / _ss)).slice(-2),
			ms = ('000' + Math.floor(Math.random(999)*1000)).slice(-3)

		let complete = 'time remaining: ' + dd + ':' + hh + ':' + mm + ':' + ss + ':' + ms

		this.setState({ remaining: {
			dd: dd, hh: hh, mm: mm, ss: ss, ms: ms, complete: complete
		}})

	}

	tick() {

		this.setState({
			date: new Date()
		});

		this.renderRemaining();

	}

	componentDidMount() {

		console.log(this.state.date)

		this.timerID = setInterval(
			() => this.tick(),
			100
		);
	}

	componentWillUnmount() {
		clearInterval( this.timerID );
	}

	render() {
		return (
			<div className='countdown-wrapper'>
				{ this.props.msgSmall && <div className='msg-mall'>{this.props.msgSmall}</div>}
				<div className='countdown'>
					<div className='countdown dd'>{this.state.remaining.dd}'</div>
					<div className='countdown hh'>{this.state.remaining.hh}'</div>
					<div className='countdown mm'>{this.state.remaining.mm}'</div>
					<div className='countdown ss'>{this.state.remaining.ss}</div>
					{ this.props.showMS && <div className='countdown ss'>'{this.state.remaining.ms}</div> }
				</div>
			</div>
		);
	}
}
Counter.propTypes = {
	showMS: PropTypes.bool,
	msgSmall: PropTypes.string
}

Counter.defaultProps = {
}

export default Counter;
