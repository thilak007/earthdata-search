import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import actions from '../../actions/index'
import SecondaryToolbar from '../../components/SecondaryToolbar/SecondaryToolbar'

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(actions.logout()),
  onUpdateProjectName: name => dispatch(actions.updateProjectName(name)),
  onChangePath: path => dispatch(actions.changePath(path))
})

const mapStateToProps = state => ({
  authToken: state.authToken,
  portal: state.portal,
  projectIds: state.project.collectionIds,
  savedProject: state.savedProject
})

export const SecondaryToolbarContainer = (props) => {
  const {
    authToken,
    portal,
    projectIds,
    location,
    savedProject,
    onLogout,
    onUpdateProjectName,
    onChangePath
  } = props

  return (
    <SecondaryToolbar
      authToken={authToken}
      portal={portal}
      projectIds={projectIds}
      location={location}
      savedProject={savedProject}
      onLogout={onLogout}
      onUpdateProjectName={onUpdateProjectName}
      onChangePath={onChangePath}
    />
  )
}

SecondaryToolbarContainer.propTypes = {
  authToken: PropTypes.string.isRequired,
  portal: PropTypes.shape({}).isRequired,
  projectIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  location: PropTypes.shape({}).isRequired,
  savedProject: PropTypes.shape({}).isRequired,
  onLogout: PropTypes.func.isRequired,
  onUpdateProjectName: PropTypes.func.isRequired,
  onChangePath: PropTypes.func.isRequired
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SecondaryToolbarContainer)
)
