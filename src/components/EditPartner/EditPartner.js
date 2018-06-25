import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import PartnerDropdown from './PartnerDropdown/PartnerDropdown';
import { triggerLogout } from '../../redux/actions/loginActions';
import NewPartnerForm from './NewPartnerForm/NewPartnerForm';


const mapStateToProps = state => ({
  user: state.user,
});

class EditPartner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPartnerID: '',
      partnerList: [],
    }
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.getPartners();
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && (this.props.user.userName === null || this.props.user.userRole !== 'admin')) {
      this.props.history.push('login');
    }
    this.getPartnerData(this.state.selectedPartnerID);
  } 

  logout = () => {
    this.props.dispatch(triggerLogout());
    this.props.history.push('login');
  }

  handleChange = (event) => {
    this.setState({
      selectedPartnerID: event.target.value,
    });
  }

  getPartners = () => {
    axios({
      method: 'GET',
      url: `/api/editPartner/partners`
    })
    .then((response) => {
      this.setState({
        partnerList: response.data
      });
    })
    .catch(err => console.log(err))
  }

  getPartnerData = (partnerID) => {
    if(this.state.selectedPartnerID !== '') {
      return axios({
        method: 'GET',
        url: `/api/editPartner/partnerInfo/${partnerID}`
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch(err => console.log(err)); 
    }
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>

          <h1>Hello Edit Partner</h1>
          <PartnerDropdown 
            partners={this.state.partnerList}
            handleChange={this.handleChange}
            getPartnerData={this.getPartnerData}
          />

          <p>
            Selected Partner is {this.state.selectedPartnerID}
          </p>
          <NewPartnerForm />
          <button id="logoutButton"onClick={this.logout}>Log Out</button>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        {content}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(EditPartner);