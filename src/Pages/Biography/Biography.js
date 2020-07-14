import React, { Component } from 'react';
import Api from '../../Services/api/Api';
import SingleCard from '../../Components/SingleCard/SingleCard';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button'


import './Biography.css'

class Biography extends Component {
    state = {
        biography: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await Api.get(`/biography/${id}`)

        this.setState({ biography: response.data })
    }


    render() {

        const { biography } = this.state

        return (
            <div>

                <div className="women">
                    <SingleCard
                        nome={biography.nome}
                        description={biography.description}
                        url={biography.url}
                    />
                    <Link to="/"><Button acao="Página inicial" /></Link>
                </div>

            </div>
        );
    }
}

export default Biography;