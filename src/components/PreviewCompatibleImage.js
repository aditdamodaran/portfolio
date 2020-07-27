import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  let imgStyle = null
  let className = null

  if (imageInfo.style) {
    imgStyle = imageInfo.style
  }
  if (imageInfo.className) {
    className = imageInfo.className
  }

  const { alt = '', childImageSharp, image } = imageInfo
  
  if (!!image && !!image.childImageSharp) {
    return (
      <Img 
        style={imgStyle} 
        fluid={image.childImageSharp.fluid} 
        alt={alt} 
        className={className}
      />
    )
  }

  if (!!childImageSharp) {
    return (
      <Img 
        style={imgStyle} 
        fluid={childImageSharp.fluid} 
        alt={alt} 
        className={className}
      />
    )
  }

  if (!!image && typeof image === 'string')
    return (
      <img 
        style={imgStyle} 
        src={image} 
        alt={alt} 
        className={className}
      />
      )

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
