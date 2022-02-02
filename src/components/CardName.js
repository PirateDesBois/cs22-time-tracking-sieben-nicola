import React from 'react';
import Track from '../data.json';

// console.log(Track[0].timeframes["daily"].current);
class CardName extends React.Component {
    render() {

        return (
            <div className="cardName">
                <div className="row">
                    <div className=" col-6">
                        <div className="divSecondaire2 card ">
                            <div className="divSecondaire1 card">
                                    <img className="me my-3 mx-3" src="./img/me.png" alt="croutch" />
                                    <p className='text-shady m-0 mt-2 p-0 mx-3'>Report for</p>
                                    <h1 className='text-light fs-2 fw-lighter p-0 mx-3 pb-5 w-50'>Nicola  Sieben</h1>
                            </div>
                            <div className="d-flex flex-sm-row flex-md-column flex-lg-column flex-xl-column pt-3">
                                <button className='text-shady mx-3 pt-3 pb-2 over text-start'onClick={this.props.changeState}>Daily</button>
                                <button className='text-shady mx-3 py-2 over text-start'onClick={this.props.changeState}>Weekly</button>
                                <button className='text-shady mx-3 py-2 over text-start'onClick={this.props.changeState}>Monthly</button>
                            </div>
                        </div>



                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        )
    }
}

export default CardName;
