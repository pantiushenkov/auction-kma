import React from 'react'

import './BrowserLots.css'

const specialities = [
  {
    'Факультет гуманітарних наук': [
      'Історія',
      'Культурологія',
      'Філологія (германські мови та літератури)',
      'Філологія (українська мова та література)',
      'Філософія',
    ],
  },
  {
    'Факультет економічних наук': [
      'Економiка',
      'Маркетинг',
      'Фiнанси',
    ],
  },
  {
    'Факультет інформатики': [
      'Інформатика',
      'Програмна інженерія',
      'Прикладна математика',
    ],
  },
  {
    'Факультет правничих наук':
      ['Право'],
  },
  {
    'Факультет природничих наук': [
      'Бiологiя',
      'Екологiя',
      'Фiзика',
      'Хiмiя',
    ],
  },
  {
    'Факультет соціальних наук і соціальних технологій': [
      'Мiжнароднi вiдносини',
      'Полiтологiя',
      'Психологiя',
      'Соцiологiя',
      'Соцробота',
    ],
  },
]

const faculties = [
  'Факультет гуманітарних наук',
  'Факультет економічних наук',
  'Факультет інформатики',
  'Факультет правничих наук',
  'Факультет природничих наук',
  'Факультет соціальних наук і соціальних технологій',
]

export class BrowseLotsPage extends React.Component {
  state = {
    faculty: null,
    speciality: null,
  }

  onFacultyClick = faculty => () => {
    this.setState({ faculty })
  }

  onSpecialityClick = speciality => () => {
    this.setState({ speciality })
  }

  render() {
    const { faculty, speciality } = this.state
    return (
      <div className="rDivider preHeader">
        <div className="container-fluid custom-container">
          <div className="row">
            <div className="col-md-2 left-feild">
              <div className="be-vidget">
                <h3 className="letf-menu-article">
                  Фільтрувати за факультетом
                </h3>
                <div className="creative_filds_block">
                  <div className="ul">
                    {faculties.map(_faculty => (
                      <div key={_faculty} onClick={this.onFacultyClick(_faculty)} data-filter=".category-1" className="filter">
                        {_faculty}
                        {faculty && faculty === _faculty &&
                        <div>
                          {specialities[faculty].map(_speciality => (
                            <div
                              key={_speciality}
                              onClick={this.onSpecialityClick(_speciality)}
                              data-filter=".category-1"
                              className={`filter ${speciality === _speciality ? 'active' : ''}`}
                            />))
                          }
                        </div>
                        }
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="be-vidget">
                <h3 className="letf-menu-article">
                  Фільтрувати за спеціальністю
                </h3>
                <div className="creative_filds_block">
                  <div className="ul">
                    {specialities.map(spec => (
                      <div data-filter=".category-1" className="filter">{spec.id}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="be-vidget">
                <h3 className="letf-menu-article">
                  Filter By
                </h3>
                <div className="filter-block">
                  <ul>
                    <li>
                      <div><i className="fa fa-graduation-cap" />Schools</div>
                      <div className="be-popup">
                        <h3 className="letf-menu-article">
                          Enter School
                        </h3>
                        <form action="http://demo.nrgthemes.com/projects/nrgnetwork/" className="input-search">
                          <input
                            className="filters-input ui-autocomplete-input"
                            type="text"
                            required
                            placeholder="Start typing to see list"
                            autoComplete="off"
                          />
                        </form>
                        <i className="fa fa-times" />
                      </div>
                    </li>
                    <li>
                      <div><i className="fa fa-wrench" />Tools Used</div>
                      <div className="be-popup">
                        <h3 className="letf-menu-article">
                          Tools
                        </h3>
                        <form action="http://demo.nrgthemes.com/projects/nrgnetwork/" className="input-search">
                          <input
                            className="filters-input ui-autocomplete-input"
                            type="text"
                            required
                            placeholder="Start typing to see list"
                            autoComplete="off"
                          />
                        </form>
                        <i className="fa fa-times" />
                      </div>
                    </li>
                    <li>
                      <div><i className="fa fa-camera-retro" />Visit Gallery</div>
                      <div className="be-popup">
                        <h3 className="letf-menu-article">
                          Galerry
                        </h3>
                        <form action="http://demo.nrgthemes.com/projects/nrgnetwork/" className="input-search">
                          <input
                            className="filters-input ui-autocomplete-input"
                            type="text"
                            required
                            placeholder="Start typing to see list"
                            autoComplete="off"
                          />
                        </form>
                        <i className="fa fa-times" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-10">
              <div id="container-mix" className="row _post-container_">
                <div className="category-1 mix custom-column-5" style={{ display: 'inline-block' }}>
                  <div className="be-post">
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-img-block">
                      <img src="Images/p1.jpg" alt="omg" />
                    </a>
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-post-title">The kitsch destruction of
                      our
                      world
                    </a>

                    <div className="author-post">
                      <img src="Images/a1.png" alt="a1.png" className="ava-author" />
                      <span>by <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html">Hoang Nguyen</a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-thumbs-o-up" /> 360</span>
                      <span><i className="fa fa-eye" /> 789</span>
                      <span><i className="fa fa-comment-o" /> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-2 mix custom-column-5" style={{ display: 'inline-block' }}>
                  <div className="be-post">
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page2.html" className="be-img-block">
                      <img src="Images/p2.jpg" alt="omg" />
                    </a>
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page2.html" className="be-post-title">Treebeard</a>

                    <div className="author-post">
                      <img src="Images/a1.png" alt="a1.png" className="ava-author" />
                      <span>by <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page2.html">Hoang Nguyen</a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-thumbs-o-up" /> 360</span>
                      <span><i className="fa fa-eye" /> 789</span>
                      <span><i className="fa fa-comment-o" /> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-3 mix custom-column-5" style={{ display: 'inline-block' }}>
                  <div className="be-post">
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page3.html" className="be-img-block">
                      <img src="Images/p3.jpg" alt="omg" />
                    </a>
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page3.html" className="be-post-title">Colors of Ramadan</a>

                    <div className="author-post">
                      <img src="Images/a2.png" alt="a2.png" className="ava-author" />
                      <span>by <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page3.html">Hoang Nguyen</a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-thumbs-o-up" /> 360</span>
                      <span><i className="fa fa-eye" /> 789</span>
                      <span><i className="fa fa-comment-o" /> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-4 mix custom-column-5" style={{ display: 'inline-block' }}>
                  <div className="be-post">
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-img-block">
                      <img src="Images/p4.jpg" alt="omg" />
                    </a>
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-post-title">Leaving Home - LOfficiel
                      Ukraine
                    </a>

                    <div className="author-post">
                      <img src="Images/a3.png" alt="a3.png" className="ava-author" />
                      <span>by <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html">Hoang Nguyen</a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-thumbs-o-up" /> 360</span>
                      <span><i className="fa fa-eye" /> 789</span>
                      <span><i className="fa fa-comment-o" /> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-5 mix custom-column-5" style={{ display: 'inline-block' }}>
                  <div className="be-post">
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page2.html" className="be-img-block">
                      <img src="Images/p5.jpg" alt="omg" />
                    </a>
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page2.html" className="be-post-title">Drive Your World</a>

                    <div className="author-post">
                      <img src="Images/a4.png" alt="a4.png" className="ava-author" />
                      <span>by <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page2.html">Hoang Nguyen</a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-thumbs-o-up" /> 360</span>
                      <span><i className="fa fa-eye" /> 789</span>
                      <span><i className="fa fa-comment-o" /> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-6 mix custom-column-5" style={{ display: 'inline-block' }}>
                  <div className="be-post">
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-img-block">
                      <img src="Images/p13.jpg" alt="omg" />
                    </a>
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-post-title">Fran Ewald for The Diaries
                      Project
                    </a>

                    <div className="author-post">
                      <img src="Images/a5.png" alt="a5.png" className="ava-author" />
                      <span>by <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html">Hoang Nguyen</a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-thumbs-o-up" /> 360</span>
                      <span><i className="fa fa-eye" /> 789</span>
                      <span><i className="fa fa-comment-o" /> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-5 mix custom-column-5" style={{ display: 'inline-block' }}>
                  <div className="be-post">
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-img-block">
                      <img src="Images/p7.jpg" alt="omg" />
                    </a>
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-post-title">raindrops monochrome</a>

                    <div className="author-post">
                      <img src="Images/a6.png" alt="a6.png" className="ava-author" />
                      <span>by <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html">Hoang Nguyen</a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-thumbs-o-up" /> 360</span>
                      <span><i className="fa fa-eye" /> 789</span>
                      <span><i className="fa fa-comment-o" /> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-3 mix custom-column-5" style={{ display: 'inline-block' }}>
                  <div className="be-post">
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page3.html" className="be-img-block">
                      <img src="Images/p8.jpg" alt="omg" />
                    </a>
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page3.html" className="be-post-title">Racing Queensland</a>

                    <div className="author-post">
                      <img src="Images/a7.png" alt="a7.png" className="ava-author" />
                      <span>by <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page3.html">Hoang Nguyen</a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-thumbs-o-up" /> 360</span>
                      <span><i className="fa fa-eye" /> 789</span>
                      <span><i className="fa fa-comment-o" /> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-2 mix custom-column-5" style={{ display: 'inline-block' }}>
                  <div className="be-post">
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-img-block">
                      <img src="Images/p9.jpg" alt="omg" />
                    </a>
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-post-title">NAHA Finalist Hairstylist
                      of
                      the Year Allen Ruiz
                    </a>

                    <div className="author-post">
                      <img src="Images/a7.png" alt="a7.png" className="ava-author" />
                      <span>by <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html">Hoang Nguyen</a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-thumbs-o-up" /> 360</span>
                      <span><i className="fa fa-eye" /> 789</span>
                      <span><i className="fa fa-comment-o" /> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-4 mix custom-column-5" style={{ display: 'inline-block' }}>
                  <div className="be-post">
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-img-block">
                      <img src="Images/p10.jpg" alt="omg" />
                    </a>
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-post-title">tomorrow</a>

                    <div className="author-post">
                      <img src="Images/a8.png" alt="a8.png" className="ava-author" />
                      <span>by <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html">Hoang Nguyen</a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-thumbs-o-up" /> 360</span>
                      <span><i className="fa fa-eye" /> 789</span>
                      <span><i className="fa fa-comment-o" /> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-6 mix custom-column-5" style={{ display: 'inline-block' }}>
                  <div className="be-post">
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-img-block">
                      <img src="Images/p11.jpg" alt="omg" />
                    </a>
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-post-title">Tropicalia</a>

                    <div className="author-post">
                      <img src="Images/a5.png" alt="a5.png" className="ava-author" />
                      <span>by <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html">Hoang Nguyen</a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-thumbs-o-up" /> 360</span>
                      <span><i className="fa fa-eye" /> 789</span>
                      <span><i className="fa fa-comment-o" /> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-2 mix custom-column-5" style={{ display: 'inline-block' }}>
                  <div className="be-post">
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-img-block">
                      <img src="Images/p12.jpg" alt="omg" />
                    </a>
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-post-title">Face</a>

                    <div className="author-post">
                      <img src="Images/a6.png" alt="a6.png" className="ava-author" />
                      <span>by <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html">Hoang Nguyen</a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-thumbs-o-up" /> 360</span>
                      <span><i className="fa fa-eye" /> 789</span>
                      <span><i className="fa fa-comment-o" /> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-1 mix custom-column-5" style={{ display: 'inline-block' }}>
                  <div className="be-post">
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-img-block">
                      <img src="Images/p13.jpg" alt="omg" />
                    </a>
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-post-title">Stay Ahead Series</a>

                    <div className="author-post">
                      <img src="Images/a5.png" alt="a5.png" className="ava-author" />
                      <span>by <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html">Hoang Nguyen</a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-thumbs-o-up" /> 360</span>
                      <span><i className="fa fa-eye" /> 789</span>
                      <span><i className="fa fa-comment-o" /> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-3 mix custom-column-5" style={{ display: 'inline-block' }}>
                  <div className="be-post">
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-img-block">
                      <img src="Images/p14.jpg" alt="omg" />
                    </a>
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-post-title">Faber-Castell /
                      Psychological
                      Problems
                    </a>

                    <div className="author-post">
                      <img src="Images/a1.png" alt="a1.png" className="ava-author" />
                      <span>by <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html">Hoang Nguyen</a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-thumbs-o-up" /> 360</span>
                      <span><i className="fa fa-eye" /> 789</span>
                      <span><i className="fa fa-comment-o" /> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-1 mix custom-column-5" style={{ display: 'inline-block' }}>
                  <div className="be-post">
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-img-block">
                      <img src="Images/p15.jpg" alt="omg" />
                    </a>
                    <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html" className="be-post-title">Garry Simpson - Bridges -
                      Intelligent Life Magazine
                    </a>

                    <div className="author-post">
                      <img src="Images/a9.png" alt="a9.png" className="ava-author" />
                      <span>by <a href="http://demo.nrgthemes.com/projects/nrgnetwork/page1.html">Hoang Nguyen</a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-thumbs-o-up" /> 360</span>
                      <span><i className="fa fa-eye" /> 789</span>
                      <span><i className="fa fa-comment-o" /> 20</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
