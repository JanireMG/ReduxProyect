import React, { Component } from "react";


class Trailer extends Component {
    render() {
        const { recentTrailers } = this.props;

        if (!recentTrailers || recentTrailers.length === 0) return <p>No hay trailers disponibles</p>
        return (
            <ul>
                {recentTrailers.slice(0, 5).map((trailer) => (
                    <li className="recent-trailer-item" key={trailer.id}>
                        <p className="recent-trailer-names">{trailer.name}</p>
                        <video
                            width="320"
                            height="180"
                            controls
                            src={trailer.data && trailer.data.max ? trailer.data.max : ""}
                        >
                        </video>
                    </li>
                ))}
            </ul>
        );
    }   

}
export default Trailer;