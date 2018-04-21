import React from 'react'
import { Header } from './Header/Header'

export class Layout extends React.Component {
  render() {
    return (
      <div>
        <div id="windowDiv">
          <div id="MarginsTop" style={{ height: 0 }} className="row" />
          <div id="bodyContainer" style={{ width: '100%' }}>
            <div className="simblaEL containerHolder" data-drag="P2" id="P2">
              <div className="container-fluid" data-title="Container" style={{ padding: 0 }}>
                <Header />
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
