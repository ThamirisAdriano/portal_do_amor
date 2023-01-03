import React from "react";
import "./header.css";


const Header = () => {
  return (
    <div className="container_header">
        <form>
          <a href="home" className="container_header">Home</a>
          <a href="create" className="container_header">Inserir aniversário</a>
        </form>
    </div>
  );
};

export default Header;
