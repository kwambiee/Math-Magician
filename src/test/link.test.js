import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe('renders correctly', () => {
  test('render Homepage', () => {
    const tree = TestRenderer.create(
      <Router>
        <Link to="/" className="navLink" activeStyle={{ color: '#ffd700' }}>
          <span>Home</span>
        </Link>
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('render Calculator page', () => {
    const tree = TestRenderer.create(
      <Router>
        <Link
          to="/calculator"
          className="navLink"
          activeStyle={{ color: '#ffd700' }}
        >
          <span>Calculator</span>
        </Link>
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('render Quote page', () => {
    const tree = TestRenderer.create(
      <Router>
        <Link
          to="/quote"
          className="navLink"
          activeStyle={{ color: '#ffd700' }}
        >
          Quotes
        </Link>
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
