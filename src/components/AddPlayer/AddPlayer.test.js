import React from 'react';
import { shallow, mount } from 'enzyme'; 
import AddPlayer from './AddPlayer';

it('renders without crushing', () => {
	shallow(<AddPlayer />);
});

it('renders correct player name', () => {
	const onPlayerAdd = jest.fn();

	const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);

	const nameInput = addPlayerComponent.find('input').first().getDOMNode();
	nameInput.value = "Justyna";

	const form = addPlayerComponent.find('form');
	form.simulate('submit');

	expect(onPlayerAdd).toBeCalledWith('Justyna');
});