import React from 'react';
import CardName from './CardName';
import LittleCard from './LittleCard';
import Track from '../data.json';
class Section extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className=" col-sm-12 col-md-3 col-lg-3 col-xl3">
            <CardName etat={this.props.etat} changeState={this.props.changeState} />
          </div>
          
          <div className="col-sm-12 col-md-9 col-lg-9 colxl-9">
            <div className="row">
              <LittleCard
                className="divSup position-relative bg1 taupeMedia"
                title="Work"
                img='./img/icon-work.svg'
                current={Track[0].timeframes[this.props.etat].current}
                previous={Track[0].timeframes[this.props.etat].previous}
                />

              <LittleCard
                className="divSup position-relative bg2 taupeMedia"
                title="Play"
                img='./img/icon-play.svg'
                current={Track[1].timeframes[this.props.etat].current}
                previous={Track[1].timeframes[this.props.etat].previous}
                />
              <LittleCard
                className="divSup position-relative bg3 taupeMedia"
                title="Study"
                img='./img/icon-study.svg'
                current={Track[2].timeframes[this.props.etat].current}
                previous={Track[2].timeframes[this.props.etat].previous}/>
              <LittleCard
                className="divSup position-relative bg4 taupe"
                title="Exercise"
                img='./img/icon-exercise.svg'
                current={Track[3].timeframes[this.props.etat].current}
                previous={Track[3].timeframes[this.props.etat].previous}/>
              <LittleCard
                className="divSup position-relative bg5 taupe"
                title="Social"
                img='./img/icon-social.svg'
                current={Track[4].timeframes[this.props.etat].current}
                previous={Track[4].timeframes[this.props.etat].previous} />
              <LittleCard
                className="divSup position-relative bg6 taupe"
                title="Self Care"
                img='./img/icon-self-care.svg'
                current={Track[5].timeframes[this.props.etat].current}
                previous={Track[5].timeframes[this.props.etat].previous} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Section;
