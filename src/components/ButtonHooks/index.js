class ButtonHooks extends Component{

    state = {
        modalOpen: false,
    }

    render(){
        return (
            <div>
                <button onClick={() => this.setState({modalOpen: true})}>
                    Exibir Modal
                </button>
                <button onClick={() => this.setState({modalOpen: false})}>
                    Remover Modal
                </button>
                {this.state.modalOpen && <Modal/>}
            </div>
        )
    }
}
export default ButtonHooks;