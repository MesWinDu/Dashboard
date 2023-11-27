import React, { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";

export const fetchData = createContext();

const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:5858";

export const DataProvider = ({ children }) => {
  const [dataState, setDataState] = useState({
    alldata: {},
    date: {},
    power: '',
    isloading: true,
    error: null,
  });

  const powerConsumption = () => {
    setDataState(prevState => ({ ...prevState, isloading: true }));
    axios.get(`${baseUrl}/api/retrievedbRouter`, {})
      .then(res => {
        if (res.data && res.data.DateTimes && res.data.Voltage) {
          setDataState({
            alldata: res.data.Voltage,
            date: res.data.DateTimes,
            power: res.data.Voltage[res.data.Voltage.length - 1],
            isloading: false,
            error: null
          });
        } else {
          throw new Error('Empty or invalid data received');
        }
      })
      .catch(err => {
        setDataState(prevState => ({
          ...prevState,
          isloading: false,
          error: err.message || 'Error fetching data'
        }));
      });
  };

  useEffect(() => {
    powerConsumption();
  }, []);

  const contextValue = useMemo(() => ({
    powerConsumption,
    ...dataState
  }), [dataState]);

  console.log(dataState)

  return (
    <fetchData.Provider value={contextValue}>
      {children}
    </fetchData.Provider>
  );
};