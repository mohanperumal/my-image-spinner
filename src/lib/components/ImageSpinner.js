import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SpinnerImage from './assets/img/BL_PageLoader.gif'

const propTypes = {
  /**
   * 
   * @default 'spinner'
   */

  blPrefix: PropTypes.string,

  /**
   * 
   * Image size variations.
   * @type {('xs' | 'sm' | 'md' | 'lg' | 'xl')}
   */

  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
}

const defaultProps = {
  size: 'md'
}

class BLImage extends React.Component {
  render() {
    const { size } = this.props;
    return (
      <ImageWrapper>
        <img src={SpinnerImage} className={`bl-image-spinner ${size}`} alt="BrightLab_Image_Spinner" />
      </ImageWrapper>

    );
  }
}

export default BLImage;

BLImage.propTypes = propTypes;
BLImage.defaultProps = defaultProps;

const ImageWrapper = styled.div`
  height:100%;
  width:100%;
  background-color:rgba(0,0,0,0.01);
  overflow:hidden;

  .bl-image-spinner{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    z-index:9;
  }
  .bl-image-spinner.xs{
      width:2%;
  }
  .bl-image-spinner.sm{
      width:3%;
  }
  .bl-image-spinner.md{
      width:4%;
  }
  .bl-image-spinner.lg{
      width:5%;
  }
  .bl-image-spinner.xl{
      width:6%;
  }
`
