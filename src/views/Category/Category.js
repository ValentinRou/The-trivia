import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ category, checkAnswer, answer, currentQuest, score, Clock }) => (
  <section>
    <h1>Category page: {category.title}</h1>
    <h2>Clue {currentQuest + 1}</h2>
    <p className="clue">clue: {category.clues[currentQuest].question}</p>
    <form onSubmit={checkAnswer}>
    <input type="text" ref={answer} placeholder="answer"></input>
    <button type="submit">Submit</button>
    </form>
    <p className="score">Score : {score} / 5</p>
    <p className="Clock">Time : {Clock}</p>
  </section>
);

Category.propTypes = {
  category: PropTypes.shape({}).isRequired,
};

export default Category;