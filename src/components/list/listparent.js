export const Listparentordered=()=>{
    return( <ol><Listitems/></ol>);
};
export const Listparentunordered=()=>{
    return (<ul><Listitems/></ul>);
};
export const Listitems=()=>{
    const iplTeams=[
        {
            teamName:"CSK",
            teamPlayers:["dhoni","jadeja","raina"],
            won:5,
            wonYears:[2015,2012,2016,2017],
        },
        {
            teamName:"SRH",
            teamPlayers:["cummins","jadeja","raina"],
            won:5,
            wonYears:[2015,2016,2012,2017],
        },
        {
            teamName:"RCB",
            teamPlayers:["cummins","jadeja","raina"],
            won:5,
            wonYears:[],
        },
    ];
    return(
        <div>
            {/* <li>apple</li>
            <li>banana</li>
            <li>orange</li>
            <li>kiwi</li> */}
            {/*to make the given array in single function we use this syntax  */}
          {iplTeams.map((eachTeam)=>{

          })}
        </div>
    );
};