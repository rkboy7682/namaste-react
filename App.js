const heading=React.createElement("h1",{id:"title"},"heading1");
        const heading2=React.createElement("h2",{id:"title"},"heading2");
        const contanar=React.createElement("div" , {id:"contanar"} ,[heading,heading2]);
        console.log(heading);
        const soot = ReactDOM.createRoot(document.getElementById("root"))
        soot.render(contanar);