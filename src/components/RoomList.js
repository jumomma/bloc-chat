import React, { Component } from 'react';
import './../App.css';


class RoomList extends Component {
    constructor(props){
        super(props)
    
    this.state = {
        rooms: []
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');

};
    
    componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
        const room = snapshot.val();
        room.key= snapshot.key;
        this.setState({ rooms: this.state.rooms.concat( room ) });
    });
   
  }
  
    render() {
        return (
           <section className ="room-list">
                <div className="side-nav">
                    <ul> 
                        {this.state.rooms.map( (room, index) =>{
                        return (
                            <li key={index}>{room.name}</li>
                            )
                        })}
                    </ul>
                </div>
           </section>
        );
        }
    }

    export default RoomList;