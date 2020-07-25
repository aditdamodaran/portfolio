import React from 'react'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="tag">
      <Helmet title={`Tags | ${title}`} />
        <div className="columns">
          <div
            className="tag-content"
          >
            <h1 className="tag-title">Tags</h1>
            <ul className="all-taglist">
              {group.map((tag) => (
                <div key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                   {`${tag.fieldValue[0].toUpperCase()}${tag.fieldValue.substr(1)}`} ({tag.totalCount})
                  </Link>
                </div>
              ))}
            </ul>
          </div>
        </div>
    </section>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
