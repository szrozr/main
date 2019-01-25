import React from 'react';
import PropTypes from 'prop-types';
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  setLanguage,
  translate,
} from 'react-switch-lang';
import ReactHtmlParser from 'react-html-parser';
import NavBar from '../components/NavBar';

import Gorilla from '../components/software-images/software-goril';
import SoftwareLogo from '../components/software-images/software-logo';
import '../styles/software.scss';


class Software extends React.Component {
  componentDidMount() {
    // window.addEventListener('onselect', this.setComponentHeight);
  }

  componentWillUnmount() {
  // window.removeEventListener('onselect', this.setComponentHeight);
  }

  render() {
    const {
      tasarim, yazilim, hakkimizda, iletisim, isVisible, handle, pagetransition, onleave, t,
    } = this.props;
    let clasName = 'notonscreen';
    if (isVisible) {
      clasName = 'onscreen';
    }
    if (pagetransition) {
      clasName = 'onscreen';
    }
    if (onleave) {
      clasName = 'onscreen';
    }
    return (
      <div className={clasName} style={{ height: '100%' }}>
        <div>
          <NavBar
            isFooter={false}
            tasarim={tasarim}
            yazilim={yazilim}
            hakkimizda={hakkimizda}
            iletisim={iletisim}
            activeId="yazilim"
            hand={handle}
          />
        </div>
        <div
          className="softwareContainer"
          style={{
            height: '100%',
          }}
        >
          <div id="softwaregorilladiv"><Gorilla /></div>
          <div id="softwareinlinecontainer">
            <div className="software" id="softwareh1">&lt;h1&gt;yazılım&lt;/h1&gt;</div>
            <p className="softwarep">
              <br />
              &emsp;
              {ReactHtmlParser(t('software.paragraf1'))}
            </p>
            <p className="softwarep">
            &emsp;
              {ReactHtmlParser(t('software.paragraf2'))}
            </p>
            <p className="softwarep">
            &emsp;
              {ReactHtmlParser(t('software.paragraf3'))}
            </p>
            <div>
              <SoftwareLogo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Software.propTypes = {
  tasarim: PropTypes.string.isRequired,
  yazilim: PropTypes.string.isRequired,
  hakkimizda: PropTypes.string.isRequired,
  iletisim: PropTypes.string.isRequired,
  isVisible: PropTypes.func.isRequired,
  handle: PropTypes.func.isRequired,
  pagetransition: PropTypes.bool.isRequired,
  onleave: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate(Software);