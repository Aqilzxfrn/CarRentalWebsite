import "./Home.css"

const Home = () => {
    return(
    <>
        <div className="Header">
           <h1>Welcome to My Car Rental Website</h1> 
            <p>The number one car rental platform in Malaysia</p>
        </div>
        <div className="content">
             <h1>Why Us?</h1>
        </div>
        <div className="card">
            <img src = "src/assets/images/homeprice.png"/>
            Affordable Price
            <p>Experience the best car rental service with affordable prices that fit your budget, without compromising on quality or reliability!</p>
        </div>
    </>
    );
}

export default Home