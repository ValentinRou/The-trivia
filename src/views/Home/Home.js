import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = ({ categories }) => (
  <section>
    <h1 className="home">Home</h1>
    {/* <button type="submit">Easy</button>
    <button type="submit">Hard</button> */}
    {categories.length > 0 && (
      <section>
        {categories.map(category => (
          <Link className="test"to={`/categories/${category.id}`} key={category.id}>
            {category.title}
          </Link>
        ))}
      </section>
    )}
  </section>
);

Home.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      clues_count: PropTypes.number
    }),
  ),
}

export default Home;