import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';

const WhyKryton = ({ data }) => {
  const StyledHeader = styled.div`
    height: 20vh;
    position: relative;
    background: #f7f7f7;
    .content {
      max-width: ${props => props.theme.responsive.maxWidth};
      width: 90%;
      margin: 0 auto;
      h1 {
        position: absolute;
        bottom: 2rem;
        font-family: ${props => props.theme.fonts.primary};
        font-size: 4rem;
      }
      ul {
        position: absolute;
        bottom: -2.5rem;
        display: flex;
        padding: 0;
        margin: 0;
        li {
          font-size: 1.5rem;
          margin-right: 3rem;
          font-family: ${props => props.theme.fonts.secondary};
          border: 1px solid ${props => props.theme.colors.black};
          a {
            color: ${props => props.theme.colors.black};
            padding: 1.5rem 2rem;
            display: inline-block;
            letter-spacing: 0.1rem;
            &:hover {
              color: #ffffff;
              background: ${props => props.theme.colors.black};
            }
          }
        }
      }
    }
  `;

  const StyledWhy = styled.div`
    max-width: ${props => props.theme.responsive.maxWidth};
    width: 90%;
    display: block;
    margin: 5rem auto;
    img {
      width: 100%;
    }
  `;

  return (
    <Layout>
      <StyledHeader>
        <div className="content">
          <h1>Where to use Kryton</h1>
          <ul>
            <li>
              <Link
                activeClassName="active-kryton-page"
                to="/kryton/why-kryton"
              >
                Why Kryton
              </Link>
            </li>
            <li>
              <Link
                activeClassName="active-kryton-page"
                to="/kryton/what-is-kryton"
              >
                What is Kryton
              </Link>
            </li>
            <li>
              <Link
                activeClassName="active-kryton-page"
                to="/kryton/where-to-use-kryton"
              >
                Where to use Kryton
              </Link>
            </li>
            <li>
              <Link
                activeClassName="active-kryton-page"
                to="/kryton/kryton-systems"
              >
                Kryton Systems
              </Link>
            </li>
          </ul>
        </div>
      </StyledHeader>
      <StyledWhy>
        <Img fluid={data.where.childImageSharp.fluid} />
      </StyledWhy>
    </Layout>
  );
};

export const data = graphql`
  {
    where: file(relativePath: { eq: "kryton/where.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1150) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default WhyKryton;
