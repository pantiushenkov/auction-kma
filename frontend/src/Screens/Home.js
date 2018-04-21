import React from 'react'

import './Home.css'
import { LotsList } from './LotsList'

export class Home extends React.Component {
  render() {
    return (
      <div
        className="row simblaEL rDivider"
        data-drag="P12"
        id="P12"
        style={{
          position: 'relative',
          marginTop: -6,
        }}
        data-title="Row"
      >
        <div className="simblaEL containerHolder" data-drag="P0" id="P0">
          <div
            className="simblaEL anchorElm"
            data-drag="divCounter"
            name="Intro0"
            id="Intro0"
          />
          <div
            className="container-fluid minHeight100 active secondary"
            data-border-type="All"
            style={{
              minHeight: 730,
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              backgroundImage: 'linear-gradient(rgb(205, 207, 232), rgb(66, 65, 82))',
              borderRadius: 0,
            }}
            data-title="Container"
            data-gradient1="#cdcfe8"
            data-gradient2="#424152"
          >
            <div className="sDivider col-md-12 index0" data-colsize={12} data-title="Column">
              <div className="row simblaEL rDivider" data-drag="P14" id="P14" data-title="Row">
                <div
                  className="sDivider col-md-3 index0"
                  data-colsize={3}
                  style={{ display: 'table-cell' }}
                  data-title="Column"
                />
                <div className="sDivider col-md-6 index1" data-colsize={6} data-title="Column">
                  <div
                    className="row simblaEL rDivider"
                    data-drag="P16"
                    id="P16"
                    data-border-type="All"
                    style={{
                      position: 'relative',
                      paddingTop: 20,
                      paddingBottom: 20,
                      border: '5px solid rgb(255, 255, 255)',
                      borderRadius: 0,
                    }}
                    data-title="Row"
                  >
                    <div className="sDivider col-md-12 index0" data-colsize={12} data-title="Column">
                      <div className="simblaEL tcH" data-drag="P18" id="P18">
                        <div className="textContainer H1" style={{ cursor: 'text' }}>
                          <h1>
                            <div style={{ textAlign: 'center' }}>Make a bid</div>
                          </h1>
                        </div>
                      </div>
                      <div className="simblaEL tcH" data-drag="P20" id="P20">
                        <div className="textContainer H3" style={{ cursor: 'text' }}>
                          <h3>
                            <div style={{ textAlign: 'center' }}>
                              <span style={{
                                lineHeight: '1.1',
                                backgroundColor: 'initial',
                              }}
                              >before 17th of May
                              </span>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                              <span style={{
                                lineHeight: '1.1',
                                backgroundColor: 'initial',
                              }}
                              ><br />
                              </span>
                            </div>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sDivider col-md-3 index2" data-colsize={3} data-title="Column" />
              </div>
            </div>
          </div>
        </div>
        <LotsList />
        <div className="simblaEL containerHolder" data-drag="P48" id="P48" style={{ position: 'relative' }}>
          <div
            className="simblaEL anchorElm"
            data-drag="divCounter"
            name="Footer0"
            id="Footer0"
          />
          <div
            className="container-fluid"
            data-border-type="All"
            style={{
              borderRadius: 0,
              paddingTop: 50,
            }}
            data-title="Container"
          >
            <div className="simblaEL tc" data-drag="P52" id="P52" style={{ position: 'relative' }}>
              <div
                className="textContainer"
                style={{
                  cursor: 'text',
                  paddingBottom: 10,
                }}
              >
                <p style={{ textAlign: 'center' }}>© 2017</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
