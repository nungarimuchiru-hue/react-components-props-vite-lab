import React from "react";

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

// FIXED: Capitalized the 'H' to match the function definition name exactly
export default Header;