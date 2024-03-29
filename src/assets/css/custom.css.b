a {
  text-decoration: none !important;
}

.nav-link:hover {
  cursor: pointer;
}

.bg-aqua {
  background-color: #e5eee9;
}

.bg-blue {
  background-color: #02c0d1;
}

.bg-turquoise {
  background-color: #e6efea;
}

.bg-dark-green {
  background-color: #006581 !important;
  color: white;
}

.btn-green,
.nav-pills .nav-link.active {
  background-color: #aed138 !important;
  color: white !important;
  font-weight: bold;
}

div#eplat-chat {
  z-index: 1040;
  margin-right: -40px;
  margin-bottom: -12px;
}

.fixed-right {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 1030;
  margin-right: 20px;
  margin-bottom: 20px;
}

.navbar-expand-lg {
  height: 120px;
}

.navbar-nav .nav-link.active {
  background: #e5eee9;
}

.text-aqua {
  color: #89e6d3;
}

.text-blue {
  color: #02bfd0;
}

.text-dark-blue {
  color: #0081df;
}

.text-aqua:hover {
  color: white;
}

.text-dark-green,
.nav-link {
  color: #006581 !important;
}

.text-green {
  color: #aed138;
}

.text-shadow {
  text-shadow: 3px 3px #506579;
}

ul.green-list {
  list-style: none; /* Remove default bullets */
}

ul.green-list li::before {
  content: "\2022"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: #aed138; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}

@media (min-width: 576px) {
  .navbar-nav .nav-link {
    padding: 48px 7px;
  }
  div#eplat-chat {
    z-index: 1040;
    margin-right: -40px;
    margin-bottom: 0;
  }
}
