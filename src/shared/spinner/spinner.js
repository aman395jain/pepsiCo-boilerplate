import React from 'react';
import "./_spinner.scss";

const Spinner = () => {
    return (<div style={{ marginTop: "50px", textAlign: "center" }}>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>);
}

export default Spinner;