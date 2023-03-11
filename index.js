const element = (
  // Write your code here.
  <div className="bgImage">
    <div className="innerBody">
      <h1 className="head">Congratulations</h1>
      <div className="bgCard">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
            className="proImg"
          />
          <p className="name">Kiran V</p>
        </div>
        <p className="disc">
          Vishnu Institute of Computer Education and Technology, Bhimavaram
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="wthImg"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
