'use client'
import { projects } from "@/public/data/projects";
import PageTitle from "../components/title/PageTitle";
import styles from './page.module.css';
import { FaGithub } from "react-icons/fa";
import Search from "../components/search/Search";
import { useEffect, useState } from "react";
import Filter from "../components/filter/Filter";

function ProjectPage() {
  const [query,setQuery] = useState("")
  const [projectsList,setProjectsList] = useState(projects)
  const [filteredValue , setFilteredValue] = useState("all")
 
  useEffect(()=>{
    if(filteredValue.trim() === 'all') {
      if(query.length > 1 ) {
        const searchedProject = projectsList.filter(project => project.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
        setProjectsList(searchedProject)
      }
      else {
        setProjectsList(projects)
      }
    }

    else {
      const filteredList = projectsList.filter(project => project.type.trim().toLowerCase() == filteredValue.trim().toLowerCase())
      if(query.length > 1 ) {
        const searchedProject = filteredList.filter(project => project.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
        setProjectsList(searchedProject)
      }
      else {
        setProjectsList(filteredList)
      }
    }
  },[filteredValue,query])

  //  useEffect(() => {
  //    if(filteredValue.trim().toLocaleLowerCase() === 'all') {
  //      setProjectsList(projects)
  //    }else {
  //     const filteredList = projectsList.filter(project => project.type.trim().toLowerCase() == filteredValue.trim().toLowerCase())
  //     setProjectsList(filteredList)
  //    }
  //  },[filteredValue])

  // useEffect(()=>{
  //   if(query.length > 1 ) {
  //     const searchedProject = projectsList.filter(project => project.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
  //     setProjectsList(searchedProject)
  //   }
  //   else {
  //     setProjectsList(projects)
  //   }

  //   return () => {}
  // },[query ])

  return (
    <div className={styles.projectPage}>
    <PageTitle secondaryTitle="my work" primaryTitle="my portfolio"/>

    <div className={styles.searchContainer}>
      <Search query={query} onChange={setQuery}/>
      <Filter filteredValue={filteredValue} onChange={setFilteredValue}/>
    </div>

     {projectsList.length > 0?
      <div className={styles.projectContainer}>
       
      {
        projectsList.map(project => {
       return (
         <div className={styles.card} key={project.id}>
         <div className={styles.cardImage}>
           <img src={project.image} alt={project.title} />
         </div>
         <div className={styles.cardBody}>
           <h3>{project.title}</h3>
           <p>{project.description}</p>
         </div>
         <div className={styles.cardFooter}>
            <a href={project.demo} target="_blank">View Demo</a>
            <a href={project.github} target="_blank"><FaGithub /></a>
         </div>
      </div>
       )
       })
      }
   </div> : <h2 className={styles.notFoundMsg}>No Projects Found , please try again!</h2>}

    </div>
  );
}
export default ProjectPage;
