import './Container.css'

const Container = (titulo) => {
    return(
        <>
        <div className="Title">
        <h2 style={{color: titulo.cor}} className="h1">How did we do?</h2>   
        </div>
        <div className="Title" >
        <p className="subTitle">Please let us know how we did with you support request. All feedback is appreciated to help us improve our offering!</p>
        </div>

        </>
    )
    

}

export default Container;