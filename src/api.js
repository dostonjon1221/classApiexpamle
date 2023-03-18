import "./api.css"
import {React, Component} from 'react'
import { CardLink,CardBody,ListGroupItem,CardTitle,CardText,ListGroup,Card, Container, Row} from "reactstrap"
class Api extends Component {
    constructor(props){
        super(props)
       this.state = {
            user:[]
        }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({user:json})
      })
    }

    render(){
        return(
        <>
        <div className="div">
          <Container className="card">
            <Row  className="title">
                {this.state.user.map((users)=>(
                  <Card
                  style={{
                    width: '18rem'
                    }}
                  >
                    <img
                      alt="Card"
                      src="https://picsum.photos/300/200"
                      
                      
                      />
                    <CardBody>
                      <CardTitle tag="h5">
                       {users.name}
                      </CardTitle>
                      <CardText>
                        {users.username}
                      </CardText>
                    </CardBody>
                    <ListGroup flush>
                      <ListGroupItem>
                       {users.email}
                      </ListGroupItem>
                      
                    </ListGroup>
                   
                  </Card>
                ))}
            </Row>
        </Container>
                </div>
        </>
        
)
        }
    }
                    


export default Api
