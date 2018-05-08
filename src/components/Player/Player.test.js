import React from 'react';
import Player from './Player';
import { shallow } from 'enzyme';

it('renders correct name', () => {
	const playerNamePassed = 'Justyna';
	const playerComponent = shallow(<Player name={playerNamePassed} />);
	const playerNameRendered = playerComponent.find('.Player_name').text();

	expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders correct score', () => {
	const playerScorePassed = 120;
	const playerComponent = shallow(<Player score={playerScorePassed} />);
	const playerScoreRendered = playerComponent.find('.Player_score').text();

	expect(Number(playerScoreRendered)).toEqual(playerScorePassed);
});

it('should call onPlayerScoreChange with 1 when plus button is clicked', () =>{
	const mockedOnPlayerScoreChange = jest.fn();
	const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);
	const plusButton = playerComponent.find('.Player_button').first();

	plusButton.simulate('click');

	expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it('should call onPlayerScoreChange with -1 when minus button is clicked', () =>{
	const mockedOnPlayerScoreChange = jest.fn();
	const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);
	const plusButton = playerComponent.find('.Player_button').last();

	plusButton.simulate('click');

	expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

it('should call onPlayerRemove when Delete button is clicked', () =>{
	const mockedOnPlayerRemove = jest.fn();
	const playerComponent = shallow(<Player onPlayerRemove={mockedOnPlayerRemove} />);
	const removeButton = playerComponent.find('.Player_button_del');

	removeButton.simulate('click');

	expect(mockedOnPlayerRemove).toBeCalled();
});