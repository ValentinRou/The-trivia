import React, { Component, createRef } from 'react';
import api from '../../helpers/api';
import Category from './Category';
import { Link } from 'react-router-dom';

class CategoryContainer extends Component {
  state = {
    category: null, 
    currentQuest: 0,
    score: 0,
    clues_count: 0,
  }


  answer = createRef()
  async componentDidMount() {
    const data = await api.getCategoryById(this.props.match.params.id);
    this.setState({
      category: data,
      clues_count: data.clues_count,
    });
  }

  
  checkAnswer = (event) => {
  event.preventDefault();
  
  const answer = this.answer.current.value; //recupere la valeur de l'input
  console.log(this.state.category.clues[0].answer)
    if (answer.toLowerCase() === this.state.category.clues[this.state.currentQuest].answer.toLowerCase()){
    this.setState({
      score: this.state.score + 1,
      currentQuest : this.state.currentQuest + 1
    });
      
    }
  else {
  
    this.setState({currentQuest: this.state.currentQuest + 1});
  }
  this.answer.current.value= ""; 

  }



  render() {
    const { category, currentQuest, score, clues_count } = this.state;
    console.log(category);
    if (!category) return <div>is loading</div>
 // Tant que l'on est pas a la dernier questions on afficher <Category>
 if (currentQuest < clues_count){
  return (
    <div className="global">
      <Category
        categoryName={this.state.category.title}
        category={category}
        checkAnswer={this.checkAnswer}
        currentQuest={currentQuest}
        score={this.state.score}
        answer = {this.answer}
      />
    <Link className="return-home" to={`/`}>
        Return to home
      </Link>
    </div>
  );
}
// A la fin de la dernier question
else {
  // Plus de 3 bonne reponse => gagné
  if (score >= 3) {
    /* Recupere dans le localStorage les categories et supprime la
    categorie en cours du localStorage */
    let recup = localStorage.getItem("categories");
    let newData = JSON.parse(recup);// Mettre dans le bon format
    // newData.splice(newData.findIndex(
    //   category => category.id === parseInt(this.props.match.params.id)
    // ), 1);// Suppression de la category
    const storage = JSON.stringify(newData);// Mettre dans le bon format
    localStorage.removeItem("categories");
    localStorage.setItem("categories", storage);

    let attempt = localStorage.getItem("attempt");
    localStorage.setItem("attempt", parseInt(attempt) + 1);// Ajoute 1 au tentative
    return (
      <div>
        <h1>You win ! <span role="img" aria-label="party">🎉</span></h1>
        <p className="score">Score : {score} / 5</p>
        <Link className="return-home" to={`/`}>
          Return to home
        </Link>
      </div>
    )
  }
  // Sinon perdu
  else {
    let attempt = localStorage.getItem("attempt");
    localStorage.setItem("attempt", parseInt(attempt) + 1); // Ajoute 1 au tentative
    return (
      <div>
        <h1>You lost <span role="img" aria-label="crying">😢</span></h1>
        <p className="score">Score : {score} / 5</p>
        <Link className="return-home" to={`/`}>
          Return to home
        </Link>
      </div>
    )
  }
}
}
}

export default CategoryContainer;