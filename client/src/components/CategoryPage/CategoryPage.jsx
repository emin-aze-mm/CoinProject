import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from "../HomePage/style.module.css";  
import { useCoins } from "../../context/CoinContext";
import "../HomePage/homestyle.css";

function CategoryPage() {
  const {coins} =useCoins();
  const {category} = useParams();
  const unique_country = [...new Set(coins.map(item => item.country))];
  const unique_metal = [...new Set(coins.map(item => item.composition))];

  const [active,setActive] =useState(false);
  const showfilter=()=>{
    setActive (!active)
  }
  return (
    <div className='mx-12 mt-7'>
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
    <div className='allcategory  flex flex-wrap '>
        {
        coins?.filter(item => item.category === category).map((el)=>(
          <div className="element  gap-3 ">
            <div className="left">
              <img  className='w-52' src={el?.image} alt="" />
            </div>
            <div className="right">
              <h1 className='text-2xl text-purple-600 font-semibold'>{el?.coinname}</h1>
              <p>{el?.descriptions}</p>
            </div>
          </div>          
            
        ))
        }
    </div>
    </div>
  )
}

export default CategoryPage