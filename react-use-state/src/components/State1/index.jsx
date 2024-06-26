import { useState } from "react"

export function State1(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    /*** Função tradicional 
    function inserir1() {
        alert('Function1')
    } 
     */

    /*** Função tradicional usando previnir eventos 
    function inserir2(e){
        e.preventDefault()

        alert(email)
    } 
     */
    
    /*** Função mais moderna 
    const inserir3 = () => {
        alert('Function3')
    } 
     */
    
    /*** Função mais moderna usando previnir eventos */
    const inserir4 = (e) => {
        e.preventDefault()

        if (nome === '') {
            alert("Por favor, preencher o campo nome!")
        } else if (email === '') { 
            alert("Por favor, preencher o campo email!")
        } else {
            alert(`Nome: ${nome} e Email: ${email}\n Cadastrado com sucesso!`)
        }
    } 

    return(
        <div className="container">
            <h1 className="mt-5 mb-5"> State1 Bootstrap </h1>

            <form onSubmit={inserir4}>
                <div className="row">
                    <div className="col">
                        <input 
                            type="text" 
                            value={nome}
                            placeholder="nome"
                            className="form-control"
                            onChange={ e => setNome(e.target.value )}
                        />    
                    </div>   

                    <div className="col">
                        <input 
                            type="text" 
                            value={email}
                            placeholder="@email"
                            className="form-control"
                            onChange={ e => setEmail(e.target.value )}
                        />
                    </div>
                </div>
                <button className="btn btn-outline-primary mt-3 mb-3" type="submit" > Inserir </button>
            </form>

            <p className="alert bg-primary"> {nome} - {email} </p>
        </div>
    )
}