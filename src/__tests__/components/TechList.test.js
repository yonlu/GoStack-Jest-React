import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import TechList from '~/components/TechList';

jest.mock('react-redux');

describe('TechList component', () => {
  it('should render tech list', () => {
    useSelector.mockImplementation(cb => cb({
      techs: ['React', 'Node.js']
    }));

    const { getByTestId, getByText, debug } = render(<TechList />);

    debug();

    expect(getByTestId('tech-list')).toContainElement(getByText('React'));
    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  });
});