import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      
      <p class="credit">Designed with <i class="fa fa-heart pulse"></i> by <a> Aditya Ranjan Pradhan</a></p>

      <p>Copyright ⓒ {year}</p>
      <br></br>

    </footer>
  );
}

export default Footer;