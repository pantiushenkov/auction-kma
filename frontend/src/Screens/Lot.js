import React from 'react'

export class Lot extends React.Component {
  render() {
    return (
      <div className="sDivider col-md-4 index1" data-colsize={4} data-title="Column">
        <div className="simblaEL simblaImg" data-drag="P37" id="P37"><img
          draggable="false"
          src="Images/19996-1f1d7e1.png"
          alt="3.png"
          data-id
          title="3.png"
        />
        </div>
        <div className="simblaEL tc" data-drag="P39" id="P39" style={{ position: 'relative' }}>
          <div
            className="textContainer"
            style={{
              cursor: 'text',
              paddingTop: 40,
            }}
          >
            <p style={{ textAlign: 'center' }}>
              ״Nor again is there anyone who loves or pursues or desires to obtain
              pain of itself, because it is pain, but because occasionally circumstances occur in which toil and
              pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes
              laborious physical exercise, except to obtain some advantage from it.״
            </p>
          </div>
        </div>
        <div className="simblaEL tcH" data-drag="P41" id="P41" style={{ position: 'relative' }}>
          <div
            className="textContainer H3"
            style={{
              cursor: 'text',
              paddingBottom: 25,
            }}
          >
            <h3>
              <div style={{ textAlign: 'center' }}><span style={{ lineHeight: '1.1' }}>Jenna Mark. Company&nbsp;</span>
              </div>
            </h3>
          </div>
        </div>
      </div>
    )
  }
}
