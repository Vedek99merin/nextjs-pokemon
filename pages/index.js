import React, { useState, useEffect } from "react"
import Search from "@/components/Search";
import Head from "next/head"
import styles from '../styles/Home.module.css'

export default function Home() {
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon list</title>
      </Head>
      
      <Search />
    </div>
  )
}
