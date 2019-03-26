import React from 'react';
import { connect } from 'react-redux';
import SidebarItem from './sidebar-item';
import { switchMode } from '../../actions/uiActions';

class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(type){
    return(e) => {
      this.props.switchMode(type);
    }
  }

  render(){
    return(
      <div className="sidebar">
        <div className="sidebar-collapse">
          <SidebarItem icon="icon" content="Charts" handleSubmit={this.handleSubmit}/>
          <SidebarItem icon="icon2" content="Financials" handleSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  mode: state.ui.mode
})

const mapDispatchToProps = dispatch => ({
  switchMode: (type) => dispatch(switchMode(type))
})


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
