import React, {Component} from 'react';
import {connect} from "react-redux";
import List from '../components/List';
import Loader from 'react-loader-spinner';

class ListContainer extends Component {
    render() {
        const { repositories, loading } = this.props.repositories;
        let repositoryList = [];
        if (repositories instanceof Array) {
            repositoryList = repositories.map((item) => {
                return {
                    name: item.name,
                    description: item.description,
                };
            });
        }
        if (loading) {
            return (
                <Loader
                    type="TailSpin"
                    color="#00BFFF"
                    height="100"
                    width="100"
                />);
        }
        return <List repositories={repositoryList} loading={this.props.loading}/>;
    }
}

function mapStateToProps(state) {
    return {
        repositories: state.repositories,
        loading: state.loading,
    }
}


export default connect(mapStateToProps)(ListContainer);