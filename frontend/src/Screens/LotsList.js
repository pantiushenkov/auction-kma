import React from 'react'
import { Lot } from './Lot'

export class LotsList extends React.Component {
  render() {
    return (
      <div className="simblaEL containerHolder" data-drag="P21" id="P21" style={{ position: 'relative' }}>
        <div
          className="simblaEL anchorElm"
          data-drag="divCounter"
          name="Content0"
          id="Content0"
        />
        <div
          className="container-fluid"
          data-border-type="All"
          style={{
            borderRadius: 0,
            paddingTop: 0,
            paddingBottom: 0,
          }}
          data-title="Container"
        >
          <div className="simblaEL containerHolder" data-drag="P23" id="P23" style={{ position: 'relative' }}>
            <div
              className="container"
              style={{
                paddingTop: 25,
                paddingBottom: 25,
              }}
              data-title="Container"
            >
              <div
                className="row simblaEL rDivider"
                data-drag="P25"
                id="P25"
                style={{
                  position: 'relative',
                  paddingBottom: 40,
                  paddingTop: 20,
                }}
                data-title="Row"
              >
                <div className="sDivider col-md-12 index0" data-colsize={12} data-title="Column">
                  <div className="simblaEL tcH" data-drag="P27" id="P27">
                    <div className="textContainer H2" style={{ cursor: 'text' }}>
                      <h2>
                        <div style={{ textAlign: 'center' }}>LOTS</div>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row simblaEL rDivider" data-drag="P29" id="P29" style={{ position: 'relative' }} data-title="Row">
                <Lot />
                <Lot />
                <Lot />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
