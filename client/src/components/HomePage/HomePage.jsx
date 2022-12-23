/** @format */

import React, { useState } from "react";
import styles from "./style.module.css";  
import "./homestyle.css";
import { useCoins } from "../../context/CoinContext";
import { Link } from "react-router-dom";



function HomePage() {
  const [active,setActive] =useState(false);
  const showfilter=()=>{
    setActive (!active)
  }
  const {coins} = useCoins()
  let bullion = coins.find(coin => coin.id === 61)
  let exclusive  = coins.find(coin => coin.id === 72)
  let commemorative   = coins.find(coin => coin.id === 46)
  const unique_country = [...new Set(coins.map(item => item.country))];
  const unique_metal = [...new Set(coins.map(item => item.composition))];
  return (
    
    <div className="mx-12 mt-7">
      
      
      <h1 className="text-4xl mb-5">Homepage</h1>
      <label htmlFor="">Input field</label>
      <div className="flex mt-1 mb-1 gap-4">
        <input
          className={styles.inp}
          type="text"
          aria-label="Search coins..."
          placeholder="Search coins..."
        />
        <button className="items-center text-sm  leading-6 font-medium py-2 px-5 rounded-md text-white bg-purple-600 hover:bg-purple-700">
          Search
        </button>
      </div>
      <p>
        <div onClick={()=>showfilter()} className="filter">
        <span className="underline advfilter">Advanced filter</span>
        <i className={`${active ? "fa-solid fa-chevron-up " : "fa-solid fa-chevron-down" } `}></i>
        </div>
      </p>
      <div className={`adv_filter  my-10 flex flex-wrap max-w-3xl gap-5 ${active ? "" : "none"}`} >
        <div className="country box">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          <div className=""></div>
        Issuing country    
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-900 text-gray-900  w-60 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >

          {
           unique_country?.map((el)=>(
            <option value={el}>{el}</option>
          ))
          }
          
        </select>
        </div>
        <div className="price box">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
        Price    
        </label>
        <div className="pricefilter flex  gap-5 max-w-xl">
          <div className="from">
          <span>from</span>
          <input className={styles.from} type="text" />
          </div>
          <div className="to">
          <span>to</span>
          <input className={styles.to} type="text" />
          </div>
          
        </div>
        
        </div>
        <div className="country box">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
        Metal    
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-900 text-gray-900  w-60 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {
           unique_metal?.map((el)=>(
            <option value={el}>{el}</option>
          ))
          }
          
        </select>
        </div>
        <div className="price box">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
        Year of issue    
        </label>
        <div className="pricefilter flex  gap-5 max-w-xl">
          <div className="from">
          <span>from</span>
          <input className={styles.from} type="text" />
          </div>
          <div className="to">
          <span>to</span>
          <input className={styles.to} type="text" />
          </div>
          
        </div>
        
        </div>
        <div className="country box">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
        Quality of the coins   
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-900 text-gray-900  w-60 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        </div>
      </div>
      <div className="coinslist flex  flex-wrap gap-20 w-full" >
        
           <div className="list">
           <h1 className="text-2xl font-semibold">{bullion?.category}</h1>
           <Link to={`/${bullion?.category}`}>
           <button className ="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded shadow">Show all</button> 
           </Link>
           <img className="w-72" src={bullion?.image}></img>
           </div>
           <div className="list">
           <h1 className="text-2xl font-semibold">{exclusive?.category}</h1>
           <Link to={`/${exclusive?.category}`}>
           <button className ="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded shadow">Show all</button>
           </Link>
           <img className="w-72" src={exclusive ?.image}></img>
           </div>
           <div className="list">
           <h1 className="text-2xl font-semibold">{commemorative?.category}</h1>
           <Link to={`/${commemorative?.category}`}> 
           <button className ="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded shadow">Show all</button>
           </Link>
           <img className="w-72 " src={commemorative?.image}></img>
           </div>
        </div>
      
    </div>
  );
}

export default HomePage;
