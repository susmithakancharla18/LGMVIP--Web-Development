* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

.App {
  background-color: #fffff;
}

.allcards {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  justify-content: space-evenly;
}

.loader {
  display: flex;
  justify-content: center;
  background-color: white;
  padding-top: 100px;
}

@media screen and (max-width: 600px) {
  .allcards {
    grid-template-columns: repeat(1, auto);
  }
}
