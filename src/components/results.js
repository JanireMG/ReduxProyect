import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSearchGames } from '../actions/searchGames';
import Logo from './logo';
import SearchBar from './searchBar';
import ReturnBtn from './ReturnBtn';

class Results extends Component {

    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        const query = params.get('query');
        if (query) {
            this.props.fetchSearchGames(query);
        }
    }

    handleGameClick = async (gameId)=> {
        const apiKey = "6411674ed3e4418196f6efd342631dcb";
        try {
            const response = await fetch("https://api.rawg.io/api/games/"+ gameId +"/stores?key=" + apiKey);
            const data = await response.json();

             if (data.results && data.results.length > 0) {
                window.open(data.results[0].url, '_blank');
            } else {
                alert("No hay tiendas disponibles para este juego.");
            }
        } catch (error) {
            console.error("Error al obtener las tiendas:", error);
        }
    };
    

    
    handleSearchBarSubmit=(query) =>{
        this.props.history.push('/results?query=' + encodeURIComponent(query));
        this.props.fetchSearchGames(query);
    }

    render() {
        const { searchGames } = this.props;

        return (
            <div>
                <ReturnBtn/>
                <Logo size={50}/>
                <SearchBar onSubmit={this.handleSearchBarSubmit}/>
                {searchGames && searchGames.length === 0 ? (
                    <p>No hay resultados.</p>
                ): (
                    <ul className='search-game-results-wrapper'>
                        {searchGames && searchGames.map(game => (

                            <li className='search-game-results' key={game.id}
                                onClick={() => this.handleGameClick(game.id)}
                            >
                                <h3 className='search-game-results-name'>{game.name}</h3>
                                {game.background_image && (
                                    <img className='search-game-results-img'
                                        src={game.background_image}
                                        alt={game.name}
                                    />
                                )}
                            </li>
                            
                        ))}
                    </ul> 
                )}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
  searchGames: state.search.searchGames
});

export default withRouter(connect(mapStateToProps, { fetchSearchGames })(Results));