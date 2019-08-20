import React from 'react';
import "./_spinner.scss";

const Spinner = () => {
    return (<div style={{ marginTop: "150px", textAlign: "center" }}>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>);
}

export default Spinner;