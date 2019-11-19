import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'
import { fetchPopularRepos } from '../../utils/api'
import Panel from "../Panel"

import { FaRegStar } from 'react-icons/fa';
// import { FaRegEye } from 'react-icons/fa';
import { AiOutlineFork } from 'react-icons/ai';
import { AiOutlineExclamationCircle } from 'react-icons/ai';




function FilterLanguage ({ selected, handleChange }) {

  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
  return (
    <select value={selected} onChange={handleChange}>
      {languages.map((language) => (
        <option 
          key={language}
          value={language}>
          {language}
        </option>
      ))}
    </select>
  )
}

FilterLanguage.propTypes = {
  selected: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}


function LangaugesNav ({ selected, onUpdateLanguage }) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

  return (
    <ul className='flex-center'>
      {languages.map((language) => (
        <li key={language}>
          <button
            className='btn-clear nav-link'
            style={language === selected ? { color: 'rgb(187, 46, 31)' } : null}
            onClick={() => onUpdateLanguage(language)}>
            {language}
          </button>
        </li>
      ))}
    </ul>
  )
}

LangaugesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired
}


function ReposTable ({ repos }) {

  return (
    <S.Table>
    <thead>
      <tr>
        <th>Postion</th>
        <th>Owner</th>
        <th>Name</th>
        <th>Stars</th>
        <th>Forks</th>
        {/* <th>Watches</th> */}
        <th>Open Issues</th>
      </tr>
    </thead>
    <tbody>
        
      {repos.map((repo, index) => {
        const { name, owner, html_url, stargazers_count, forks, open_issues, /*watchers*/ } = repo
        const { login, avatar_url } = owner
        return (
          <tr key={html_url}>
            <td className="position"> {index + 1}</td>
            <td> 
              <a href={html_url} target="_blank" rel="noopener noreferrer">
                <img src={avatar_url} alt={`Avatar for ${login}`}/> <span>{login} </span>
              </a>
            </td>
            <td> {name}</td>
            <td> <div className="td-icon"> <FaRegStar/> {stargazers_count.toLocaleString()} </div></td>
            <td> <div className="td-icon"> <AiOutlineFork/> {forks.toLocaleString()}</div></td>
            {/* <td> <div className="td-icon"> <FaRegEye/> {watchers.toLocaleString()}</div></td> */}
            <td> <div className="td-icon"> <AiOutlineExclamationCircle/> {open_issues.toLocaleString()}</div></td>
          </tr>
          )
      })}
       
   
    </tbody>
  </S.Table>
  )
}

ReposTable.propTypes = {
  repos: PropTypes.array.isRequired
}

export default class Popular extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage : 'All',
      repos: {},
      error: null,
    }

    this.handleChange = this.handleChange.bind(this)
    this.updateLanguage = this.updateLanguage.bind(this)
    this.isLoading = this.isLoading.bind(this)

  }

  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage)
  }

  updateLanguage (selectedLanguage) {
    this.setState({
      selectedLanguage,
      error: null,
    })

    if(!this.state.repos[selectedLanguage]) {

      fetchPopularRepos(selectedLanguage)
        .then((data) => {
          console.log(data)
          this.setState(({ repos }) => ({
            repos: {
              ...repos,
              [selectedLanguage]: data
            }
          }))
        })
        .catch(() => {
          console.warn('Error fetching repos: ', this.state.error)

          this.setState({
            error: `There was an error fetching the repositories.`
          })
        })
    }

  }

  handleChange (event) {
    const selectedLanguage = event.target.value

    this.setState({
      selectedLanguage,
      error: null,
    });

    if(!this.state.repos[selectedLanguage]) {

      fetchPopularRepos(selectedLanguage)
        .then((data) => {
          this.setState(({ repos }) => ({
            repos: {
              ...repos,
              [selectedLanguage]: data
            }
          }))
        })
        .catch(() => {
          console.warn('Error fetching repos: ', this.state.error)

          this.setState({
            error: `There was an error fetching the repositories.`
          })
        })
    }

  }

  isLoading() {
    const { selectedLanguage, repos, error } = this.state
 
    return !repos[selectedLanguage] && error === null
  }


  render() {
    const { selectedLanguage, repos, error } = this.state
  
    return(
      <>
      <Panel title="Popular Github Repos">
        <S.FilterWrapper> <span> Language: </span>
          <label> 
            <FilterLanguage 
              selected={selectedLanguage} 
              handleChange={this.handleChange}
            />
          </label>
        </S.FilterWrapper>

        { this.isLoading() && <p>Loading</p> }

        { error && <p> {error}</p> }
      
        { repos[selectedLanguage] && <ReposTable repos={repos[selectedLanguage]}/>}

      </Panel>
    
      </>
    )

  }
 
}