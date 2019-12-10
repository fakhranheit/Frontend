import React from "react";

const Ninjas = ({ dataManusia }) => {
  // const listManusia=dataManusia.map((dataManusia)=>{
  //   if (dataManusia.usia>20){
  //   return (
  //     <div className="manusia" key={dataManusia.id}>
  //         <div> Name: {dataManusia.name} </div>
  //         <div>usia:{dataManusia.usia}</div>
  //         <div>Hobby: {dataManusia.hobby}</div>
  //    </div>
  //     )
  //   } else{
  //     return null
  //   }
  // })
  return (
    <div>
      {dataManusia.map(dataManusia => {
        return dataManusia.usia > 10 ? (
          <div className="manusia" key={dataManusia.id}>
            <div> Name: {dataManusia.name} </div>
            <div>usia:{dataManusia.usia}</div>
            <div>Hobby: {dataManusia.hobby}</div>
            <br/>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Ninjas;
