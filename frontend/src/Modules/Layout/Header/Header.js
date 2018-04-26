import React from 'react'

export class Header extends React.Component {
  render() {
    return (
      <header
        className="simblaEL container-fluid sticky shadow-low"
        data-drag="P4"
        id="P4"
        data-slide-type="fade"
        data-opacity={100}
        data-style-class
        style={{
          position: 'relative !important',
          paddingTop: 30,
          paddingBottom: 30,
        }}
        data-title="Header"
      >
        <div className="container">
          <div className="row simblaEL rDivider" data-drag="P6" id="P6" data-title="Row">
            <div className="sDivider col-md-3 index0" data-colsize={3} data-title="Column">
              <div className="simblaEL tcH" data-drag="P53" id="P53">
                <div className="textContainer H3" style={{ cursor: 'text' }}>
                  <h3>
                    <font style={{ fontSize: 24 }}>KMA
                      Auction&nbsp;
                    </font> &nbsp;&nbsp;
                  </h3>
                </div>
              </div>
            </div>
            <div className="sDivider col-md-9 index1" data-colsize={9} data-title="Column">
              <nav
                className="simblaEL menuHolder2 navbar navbar-default"
                data-drag="P10"
                id="P10"
                data-menu-id="5ac0a0051c4eca001aab14b6"
                data-type="solid"
                data-align="right"
                data-group-type="horizontal"
                style={{ marginBottom: 0 }}
              >
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target="[data-drag=&quot;P10&quot;] .navbar-collapse"
                    ><span className="sr-only">Toggle navigation</span>
                      <span
                        className="icon-bar"
                      /><span className="icon-bar" /><span className="icon-bar" />
                    </button>
                  </div>
                  <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                      <li>
                        <a
                          style={{
                            border: 'none',
                            borderRadius: 0,
                            marginRight: 0,
                            marginLeft: 0,
                          }}
                          className=" current"
                          href="http://sites.simbla.com/cb380348-a703-aab4-53b6-31213cb48ed3/#"
                        ><span>Home</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://sites.simbla.com/cb380348-a703-aab4-53b6-31213cb48ed3/about"
                          style={{
                            border: 'none',
                            borderRadius: 0,
                            marginRight: 0,
                            marginLeft: 0,
                          }}
                        ><span>About</span>
                        </a>
                      </li>
                      <li>
                        <a
                          style={{
                            border: 'none',
                            borderRadius: 0,
                            marginRight: 0,
                            marginLeft: 0,
                          }}
                          href="http://sites.simbla.com/cb380348-a703-aab4-53b6-31213cb48ed3/f.a.q"
                        ><span>F.A.Q</span>
                        </a>
                      </li>
                      <li>
                        <a
                          style={{
                            border: 'none',
                            borderRadius: 0,
                            marginRight: 0,
                            marginLeft: 0,
                          }}
                          href="http://sites.simbla.com/cb380348-a703-aab4-53b6-31213cb48ed3/portfolio"
                        ><span>Profile</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
