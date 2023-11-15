import React from "react";

const marketSchedule = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A",
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C",
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F",
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E",
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D",
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G",
  },
];

// const Market = ({ day, location, hours, booth }) => (
//   <div>
//     <h3>{location}</h3>
//     <p>{day}</p>
//     <p>{hours}</p>
//     <p>{booth}</p>
//   </div>
//   console.log(typeof hours);
// );

function Market2({ day, location, hours, booth }) {
  return (
    <div className="market-item">
      <h3>{location}</h3>
      <p>{day}</p>
      <p>{hours}</p>
      <p>{booth}</p>
    </div>
  );
}

// function Market(props) {
//   return (
//     <React.Fragment>
//       <h3>{props.location}</h3>
//       <p>{props.day}</p>
//       <p>{props.hours}</p>
//       <p>{props.booth}</p>
//       <hr />
//     </React.Fragment>
//   );
// }

function MarketList() {
  return (
    <div className="market-list-container">
      {marketSchedule.map((market, index) => (
        <Market2
          day={market.day}
          location={market.location}
          hours={market.hours}
          booth={market.booth}
          key={index}
        />
      ))}
    </div>
  );
}

export default MarketList;

// function Market() {
//   return (
//     <React.Fragment>
//       <hr />
//       {marketSchedule.map((market, index) => (
//         <Market
//           day={market.day}
//           location={market.location}
//           hours={market.hours}
//           booth={this.booth}
//           key={index}
//         />
//       ))}
//       ;
//     </React.Fragment>
//   );
// }
