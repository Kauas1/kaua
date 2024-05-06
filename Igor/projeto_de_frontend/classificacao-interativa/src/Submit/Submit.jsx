import './Submit.css'
const Submit = (Button)=>{
    return(
        <>
        <div className="submit">

         <input className="submit" type="button" placeholder={Button.Button} style={{backgroundColor: Button.background, color: Button.cor, borderRadius: Button.borda, }} value="SUBMIT"/>
        </div>
        </>
    )
}

export default Submit;