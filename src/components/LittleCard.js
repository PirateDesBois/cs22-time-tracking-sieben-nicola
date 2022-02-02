import React from 'react';

class LittleCard extends React.Component {
  render() {
    return (
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <div className={this.props.className}>
        <img className="position-absolute img-little" src={this.props.img} alt="plop"/>
            <div className="divInf position-relative">
                <div className="1">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between align-items-center">
                            <p className='text-light fw-bold ms-3 mt-3'>{this.props.title}</p>
                            <img className='me-3' src="./img/icon-ellipsis.svg" alt="dotx3" />
                        </div>
                            <h2 className='text-light ms-3 fs-1 fw-lighter '>{this.props.current}hrs</h2>
                            <p className='text-shady ms-3'>Last Week - {this.props.previous}hrs</p>
                    </div>
                    

                </div>
            </div>
        </div>
        </div>
    )
  }
}

export default LittleCard;
