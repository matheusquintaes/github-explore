import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'
import { fetchPopularRepos } from '../../utils/api'


function FilterLanguage ({ selected, handleChange }) {

  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
  return (
    <select value={selected} onChange={handleChange}>>
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
        <th>Name</th>
        <th>Stars</th>
        <th>Forks</th>
        <th>Watches</th>
        <th>Open Issues</th>
      </tr>
    </thead>
    <tbody>
        
      {repos.map((repo, index) => {
        const { owner, html_url, stargazers_count, forks, open_issues, watchers } = repo
        const { login, avatar_url } = owner
        return (
          <tr key={html_url}>
            <td> {index + 1}</td>
            <td> <img src={avatar_url} alt={`Avatar for ${login}`}/> {login} </td>
            <td> {stargazers_count.toLocaleString()}</td>
            <td> {forks.toLocaleString()}</td>
            <td> {watchers.toLocaleString()}</td>
            <td> {open_issues.toLocaleString()}</td>
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

        <S.Filter> Language:
          <FilterLanguage 
            selected={selectedLanguage} 
            handleChange={this.handleChange}
          />
        </S.Filter>

      { this.isLoading() && <p>Loading</p> }

      { error && <p> {error}</p> }
     
      { repos[selectedLanguage] && <ReposTable repos={repos[selectedLanguage]}/>}

     
    
      </>
    )

  }
 
}