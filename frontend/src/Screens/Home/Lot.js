import React from 'react'

export class Lot extends React.Component {
  render() {
    const { user: { description, name, image } } = this.props
    return (
      <div className="sDivider col-md-4 index1" data-colsize={4} data-title="Column">
        <div className="simblaEL simblaImg" data-drag="P37" id="P37"><img
          draggable="false"
          src={image}
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
              {description}
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
              <div style={{ textAlign: 'center' }}><span style={{ lineHeight: '1.1' }}>{name}</span>
              </div>
            </h3>
          </div>
        </div>
      </div>
    )
  }
}
