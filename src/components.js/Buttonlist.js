import Button from "../components.js/Button";

const Buttonlist=()=>{
    //  const list=["All","Gaming","songs","movies","cricket","news","games","shows","cooking","popular shows"];
    return(
        <div className="flex">
            {/* {
                list.map((btn)=>(
                    <Button names={btn}/>
                ))
            } */}

         {/* {or} */}
            <Button name="All"/>
            <Button name="live"/>
            <Button name="soccer"/>
            <Button name="cricket"/>
            <Button name="cooking"/>
            <Button name="news"/>
            <Button name="games"/>
            <Button name="shows"/>
            <Button name="movies"/>
            <Button name="cooking"/>
            <Button name=" shows"/>




            
            
        </div>
    );
};
export default Buttonlist;