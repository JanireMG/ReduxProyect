import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { withRouter } from "react-router-dom";

function ReturnBtn ({history}) {
    return (
        <button className="return-btn" 
            onClick={()=> history.push('/')}
        >
            <FontAwesomeIcon icon="arrow-left"/>
        </button>

    );
}

export default withRouter(ReturnBtn)