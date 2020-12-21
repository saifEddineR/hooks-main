import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([
    {
      img:
        "https://resizing.flixster.com/w0-L_OjKWmAZALe0Dv3T8i61tcw=/180x267/v1.bTsxMzM1OTI5MjtqOzE4NzAxOzIwNDg7NDA1MDs2MDAw",
      title: "THE OTHER LAMB",
      auther: "Malgorzata Szumowska",

      rating: 2,
    },
    {
      img:
        "https://resizing.flixster.com/sTCbx82_mIuzzi58EYMYNuk0fPk=/180x267/v1.bTsxMzI3ODg1OTtqOzE4NzI3OzIwNDg7NjA3Mjs5MDAw",
      title: "BAD BOYS FOR LIFE",
      auther: "Adil El Arbi, Bilall Fallah",
      rating: 2,
    },
    {
      img:
        "https://resizing.flixster.com/4tf2VICqHsFsIk1VaSw9XJgUEsg=/206x305/v2/https://resizing.flixster.com/u8avPz56JgG3LgQ37asRNe3UQMA=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzJjYTM2NWYxLWI4NDgtNDQ3Mi05YTA5LWIyYTI4NThiZTJkYS53ZWJw",
      title: "MALEFICENT",
      auther: "Robert Stromberg",
      rating: 4,
    },
    {
      img:
        "https://resizing.flixster.com/ZDisBvib7RW1HNgjRkzp1Tty9zM=/206x305/v2/https://resizing.flixster.com/Uolvsd73gtBbxnVk_rWpshGLnHU=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2Y1NmMxNDFkLTc5M2MtNDdiZS1iZTcwLWIxZGRiYTg2YTMzZi53ZWJw",
      title: "THE INVISIBLE MAN",
      auther: "Leigh Whannell",
      rating: 3,
    },
    {
      img:
        "https://resizing.flixster.com/vEdWD5JLBiRuHF99LQb1vxMjnCA=/206x305/v2/https://resizing.flixster.com/UHXfYNLDqLdHdulYTnDILH-qReY=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2MyZWM4MjVhLWQ2MTYtNDEwMy05ZDI5LWNmNjI5Y2Q0MzU1Ny53ZWJw",
      title: "BIRD BOX",
      auther: " Susanne Bier",
      rating: 3,
    },
  ]);
  const AddMovies = (x) => {
    setMovies([...movies, x]);
  };
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(0)
  const handleChange = (search,rate) => {
    setSearch(search);
    setRate(rate)
  };

  const filterMovie = movies.filter((movie) => {
    let checkMovie =  movie.title.toLowerCase().includes(search.toLowerCase());
    if(checkMovie && movie.rating >=rate ){
      return movie;
    }
  });

  return (
    <div className="App">
      <header>
        <NavBar handleChange={handleChange} />
      </header>
      <div className="app">
        <AddMovie Updatemovie={AddMovies} />
        <MovieList movies={filterMovie} />
      </div>
    </div>
  );
}

export default App;
