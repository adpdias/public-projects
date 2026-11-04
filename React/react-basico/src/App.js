import './App.css';
import Comentario from './components/Comentario';
import React, { Component } from 'react';

class App extends Component {

  state = {
    comentarios: [
      { 
        nome: 'Alessandro',
        email: 'adpdias@gmail.com',
        data: new Date(2025, 11, 19), 
        mensagem: 'Hello!'
      },
      { 
        nome: 'Joana',
        email: 'joana@gmail.com',
        data: new Date(2025, 11, 19), 
        mensagem: 'Hello!'
      }
    ], 
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }

  adicionarComentario = evento => {
    evento.preventDefault();
    console.log('Adicionando comentário...');

    const novoComentario = {
      ...this.state.novoComentario,
      data: new Date()
    };

    this.setState({ 
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: { nome: '', email: '', mensagem: '' } 
    });
  }

  atualizarComentario = evento => {
    const { name, value } = evento.target;
    this.setState({
      novoComentario: {
        ...this.state.novoComentario,
        [name]: value
      }
    });
  }

  removerComentario = comentario => {
    let listaAtualizada = this.state.comentarios.filter( c => c !== comentario );
    this.setState({ comentarios: listaAtualizada });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.comentarios.map( (comentario, index) => (
            <Comentario 
              key={index}
              nome={comentario.nome} 
              email={comentario.email} 
              data={comentario.data}
              mensagem={comentario.mensagem}
              onRemove={this.removerComentario.bind(this, comentario)}>
            </Comentario>
          ))}
          <form method="post" onSubmit={this.adicionarComentario} className="Novo-Comentario">
            <h2>Adicionar seu comentário</h2>
            <div>
              <input type="text" 
                name="nome" 
                value={this.state.novoComentario.nome} 
                onChange={this.atualizarComentario} 
                required
                placeholder="Digite seu nome" />
            </div>
            <div>
              <input type="email" 
                name="email" 
                value={this.state.novoComentario.email} 
                onChange={this.atualizarComentario} 
                required
                placeholder="Digite seu E-mail" />  
            </div>
            <div>
              <textarea
                name="mensagem"
                rows="4" 
                value={this.state.novoComentario.mensagem} 
                onChange={this.atualizarComentario}
                required />  
            </div>
            <button type="submit">Adicionar Comentário</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
