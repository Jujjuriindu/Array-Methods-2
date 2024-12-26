import logo from './logo.svg';
import './App.css';

function App() {
  let miTeam = ["Rohit Sharma","Surya Kumar Yadav","Tilak Varma","Naman Dhir","Hardik Pandya","Arjun Tendulkar","Jasprit Bumrah","Will Jacks","Karn Sharma","Deepak Chahar","Lizaad Williams","Robin Minz","Mitchell Santner","Trent Boult","Ashwani Kumar","Surya Kumar Yadav"];
  return (
    <div className="App">
      <h1>Array Methods</h1>
      <hr></hr>
      <button type="button" 
      onClick={()=>{
        console.log(miTeam);
        delete miTeam[7];
        console.log(miTeam);
      }}>Array delete</button>
      <button type="button" 
      onClick={()=>{
        console.log(miTeam);
        miTeam.splice(2,1);
        console.log(miTeam);
      }}>Array splice</button>
      <button type="button" 
      onClick={()=>{
        let Heros=["Prabhas","JrNtr","Mahesh Babu","Ram Pothineni","Allu Arjun"];
        let Heroins=["Krithi Shetty","Sreeleela","Rashmika Mandana","Pooja Hegde","Anushka Shetty"];
        let Villans=["Jagapathi Babu","GopiChand","Sudeep","Fahadh Faasil","Rana Daggubati"];
        let movieActors=Heros.concat(Heroins,Villans);
        console.log(Heros);
        console.log(Heroins);
        console.log(Villans);
        console.log(movieActors);
      }}>Array concat</button>
      <button type="button" 
      onClick={()=>{
        let Heros=["Prabhas","JrNtr","Mahesh Babu","Ram Pothineni","Allu Arjun"];
        let Heroins=["Krithi Shetty","Sreeleela","Rashmika Mandana","Pooja Hegde","Anushka Shetty"];
        let Villans=["Jagapathi Babu","GopiChand","Sudeep","Fahadh Faasil","Rana Daggubati"];
        let movieActors=[...Heros,...Heroins,...Villans];
        console.log(Heros);
        console.log(Heroins);
        console.log(Villans);
        console.log(movieActors); 
      }}>Array spread</button>
      <button type="button" 
      onClick={()=>{
        let prabhasMovies=["Chatrapathi","Yogi","Billa","Bahubali","Rebal"];
        let jrNtrMovies=["Jai Lavakusa","Rabasa","Dhammu","Student No 1","Devara"];
        let ramMovies=["Skanda","Hyper","Ismart Shankar","Kandireega","Ready"];
        let teluguActors=[prabhasMovies,jrNtrMovies,ramMovies];
        let teluguActors1=teluguActors.flat();
        console.log(teluguActors1);
        console.log(teluguActors[1][2]);
        console.log(teluguActors[0][4]);
        console.log(teluguActors[2][2]);
      }}>Array flat</button>
      <button type="button" 
      onClick={()=>{
        console.log(miTeam);
        let indianPlayers=miTeam.slice(2,8);
        console.log(indianPlayers);
      }}>Array slice</button>
      <button type="button" 
      onClick={()=>{
        console.log(miTeam);
        let playersFill=miTeam.fill("MSDhoni",8,14);
        console.log(playersFill);
      }}>Array fill</button>
      <button type="button" 
      onClick={()=>{
        let teamPlayer="RohitSharma";
        console.log(teamPlayer);
        let arr=Array.from(teamPlayer);
        console.log(arr);
      }}>Array from</button>
      <button type="button" 
      onClick={()=>{
        console.log(miTeam);
        let indianPlayer=miTeam.includes("Will Jacks");
        console.log(indianPlayer);
      }}>Array includes</button>
      <button type="button" 
      onClick={()=>{
        console.log(miTeam);
        let indianPlayer=miTeam.indexOf("Deepak Chahar");
        let indianPlayer1=miTeam.indexOf("Trent Boult");
        console.log(indianPlayer);
        console.log(indianPlayer1);
      }}>Array indexOf</button>
      <button type="button" 
      onClick={()=>{
        console.log(miTeam);
        let indianPlayer=miTeam.lastIndexOf("Surya Kumar Yadav");
        console.log(indianPlayer);
      }}>Array lastIndexOf</button>
      <button type="button" 
      onClick={()=>{
        console.log(miTeam);
        let playersMI=miTeam.reverse();
        console.log(playersMI);
      }}>Array reverse</button>
      <button type="button" 
      onClick={()=>{
        console.log(miTeam);
        let playerSort=miTeam.sort()
        console.log(playerSort);
        let numbers=[2,8,4,5,9,22,77,84,90,543,765,879,2567];
        console.log(numbers);
        console.log(numbers.sort());
      }}>Array sort</button>
      <button type="button" 
      onClick={()=>{
        console.log(miTeam);
        let playersTeam=["Jasprit Bumrah"];
        let arr=Array.isArray(playersTeam);
        console.log(arr);
      }}>Array isArray</button>
    </div>
  );
}

export default App;
