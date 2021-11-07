import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        person {
          age
          name
        }
        complexData {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const {
    site: {
      info: { title, author },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      {/* <h2>Name : {data.site.info.person.name}</h2> */}
      <h2>Site title is: {title}</h2>
      <p>Author: {author}</p>
    </div>
  )
}

export default FetchData
