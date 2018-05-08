import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayerList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
	const appComponent = shallow(<App players={[]}/>);

	const players = [
	    {
	        name: 'Kunegunda',
	        score: 5
	    }
	]

	appComponent.setState({ players });

	const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
	
	onScoreUpdate(0,5);

	const playersAfterUpdate = appComponent.state('players');
	//lub:
	// const playersAfterUpdate = appComponent.state().players;

	expect(playersAfterUpdate[0].score).toEqual(10);
});

it('should add new player to the app', () => {
	const appComponent = shallow(<App />);

	const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
	onPlayerAdd('Justyna');

	const players = appComponent.state('players');
	expect(players.length).toEqual(3);
	expect(players[0].name).toEqual('Tomasz');
	expect(players[0].score).toEqual(5);
});

it('should check if player  was removed from the App', () => {
	const appComponent = shallow(<App />);

	const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
	onPlayerAdd('Adam');

	const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');
	onPlayerRemove('Adam');

	const players = appComponent.state('players');

	expect(players.length).toEqual(2);
});