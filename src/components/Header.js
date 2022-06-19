import React from "react";

function Header(prop) {
    console.log(prop.name);
    return (
        <h1>
            {prop.blogName};
        </h1>
    );
}

export default Header;