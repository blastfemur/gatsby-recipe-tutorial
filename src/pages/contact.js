import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              Vaporware literally hot chicken tumblr trust fund plaid everyday
              carry activated charcoal hell of art party bushwick lomo cardigan
              subway tile. Art party typewriter biodiesel offal fam.
            </p>
            <p>Gluten-free truffaut drinking vinegar bicycle rights</p>
            <p>
              Stumptown cardigan umami, skateboard helvetica chia copper mug
              banh mi crucifix brunch viral VHS fixie.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xyylqonj"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name"></input>
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email"></input>
              </div>
              <div className="form-row">
                <label htmlFor="name">message</label>
                <input type="textarea" name="message" id="message"></input>
                <button type="submit" className="btn block">
                  submit
                </button>
              </div>
            </form>
          </article>
        </section>
        <section className="featured-recipe">
          <h5>Look at this AWESOMESAUCE!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        content {
          id
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      totalCount
    }
  }
`

export default Contact
