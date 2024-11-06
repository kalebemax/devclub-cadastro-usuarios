import api from "../../services/api"
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
import Button from "../../components/Button"
import TopBackground from '../../components/TopBackground'
import { Container, ContainerUsers, TrashIcon, CardUsers, AvatarUser, Title } from "./styles"
import Trash from "../../assets/trash.svg"


function ListUsers() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/usuarios')

            setUsers(data)
        }
        getUsers()
    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)

        const updateUsers = users.filter(user => user.id !== id)

        setUsers(updateUsers)
    }

    return (

        <Container>
            <TopBackground />
            <Title>
                <h1>Lista de usuários</h1>
            </Title>

            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser />
                        <div>
                            <h3>
                                {user.name}
                            </h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                            
                        </div>
                        <TrashIcon src={Trash} onClick={() => deleteUsers(user.id)}/>
                    </CardUsers>
                ))}
            </ContainerUsers>
            <Button type="button" onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    )
}

export default ListUsers