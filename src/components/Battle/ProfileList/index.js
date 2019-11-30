import React from 'react'
import PropTypes from 'prop-types'

import { MdPeople } from "react-icons/md";
import { MdCode } from "react-icons/md";
import { MdStar } from "react-icons/md";

import * as S from './styled'

export default function ProfileList ({ profile, starCount}) {
  return (
   <S.StatusList>
    <li><div><span> <MdPeople/></span> <p> {profile.followers.toLocaleString()} followers</p></div></li>
    <li><div><span> <MdCode/>  </span> <p> {profile.public_repos.toLocaleString()} repositories</p> </div></li>
    <li><div><span> <MdStar/> </span> <p>{starCount.toLocaleString()} stars</p> </div></li>
   </S.StatusList>
  )
}

ProfileList.propTypes = {
  profile: PropTypes.object.isRequired,
  starCount: PropTypes.number.isRequired,
}