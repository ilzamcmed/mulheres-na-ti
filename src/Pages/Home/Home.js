import React, { Component } from 'react';
import Api from '../../Services/api/Api'
import Cards from '../../Components/Cards/Cards';

import './Home.css';
import Button from '../../Components/Button/Button';


class Home extends Component {
    state = {
        biographies: [],
        biographyInfo: {},
        page: 1
    }

    //assim que minha plicação for montada, chamo o didmount, eu carrego as biografias
    componentDidMount = async () => {
        await this.loadBiobraphies()
    }

    //nessa função, usa o async/await para esperar carrecar a API e o response é a resposta da API
    loadBiobraphies = async (page = 1) => {
        const response = await Api.get(`/biographies?page=${page}`);
        const { docs, ...biographyInfo } = response.data

        // console.log(docs)
        this.setState({ biographies: docs, page, biographyInfo })
    }

    nextPage = () => {
        const { page, biographyInfo } = this.state;

        if (page === biographyInfo.pages) return;

        const pageNumber = page + 1;

        this.loadBiobraphies(pageNumber)

    }

    prevPage = () => {
        const { page } = this.state;

        if (page === 1) return;
        const pageNumber = page - 1;
        this.loadBiobraphies(pageNumber)
    }



    render() {
        const { biographies, page } = this.state

        console.log(biographies)
        return (
            <div className="list__women">

                {biographies.length ? biographies.map(item =>

                        ( // esse () é o retorn do map
                            <Cards
                                key={item._id}
                                nome={item.nome}
                                description={item.description}
                                acesso={`/biography/${item._id}`}

                            />


                        )

                ) :
                    <h1>Loading...</h1>
                }
                <div className="actions">
                    <Button
                        disabled={page === 1}
                        onClick={this.prevPage}
                        acao="Anterior" />

                    <Button
                        disabled={page === 2}
                        onClick={this.nextPage}
                        acao="Próximo"
                    />
                </div>
            </div>
        );
    }
}

export default Home;
// disabled={page===biographyInfo}