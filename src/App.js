import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      fields: [
      //   {
      //   id: "1",
      //   name: "firstName",
      //   boxType: "text",
      //   width: 250,
      //   height: 30,
      //   value: "",
      //   xfield: 674,
      //   yfield: 93
      // }        
        ],
      dragType: "",
      xBox: "",
      yBox: "",
      xClickPoint: "",
      yClickPoint: "",
      move: false,
      moveId: "",
    };
  }
  drag(e, type) {
    console.log("drag", type)
    e.dataTransfer.setData("text", e.target.id);
    // var newStateArray = this.state.dragType.slice();
    this.state.dragType = type
    var my_div = document.getElementById(e.target.id)
    var box = { left: 0, top: 0 };
    box = my_div.getBoundingClientRect();
    let y = e.pageY
    let x = e.pageX
    console.log("box ", box.x)
    this.state.xClickPoint = x
    this.state.yClickPoint = y
    this.state.xBox = box.x
    this.state.yBox = box.y
    console.log("x: ", x, " y: ", y)
  }
  move(e) {
    console.log("move", e.target.id)
    console.log("field type: ", this.state.fields[e.target.id])
    e.dataTransfer.setData("text", e.target.id);
    this.state.move = true    
    this.state.moveId = e.target.id
    var my_div = document.getElementById(e.target.id)
    var box = { left: 0, top: 0 };
    box = my_div.getBoundingClientRect();
    let y = e.pageY
    let x = e.pageX
    console.log("box ", box.x)
    this.state.xClickPoint = x
    this.state.yClickPoint = y
    this.state.xBox = box.x
    this.state.yBox = box.y
    
  }
  drop(e) {
    console.log("drop")
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    // e.target.appendChild(document.getElementById(data));
    var x = e.pageX - (this.state.xClickPoint - this.state.xBox)
    var y = e.pageY - (this.state.yClickPoint - this.state.yBox)
    if(this.state.move == false){
      var joined = this.state.fields.concat({
        id: Date.now(), 
        name: 'none', 
        boxType: this.state.dragType, 
        xfield: x, 
        yfield: y})
      this.setState({fields: joined})
    } else {
      this.state.fields[this.state.moveId].xfield = x
      this.state.fields[this.state.moveId].yfield = y
      this.state.move = false
    }
  }
  allowDrop(e) {
    console.log("allowDrop")
    e.preventDefault();
  }
  coords(e) {
    this.setState({ x: e.pageX, y: e.pageY })
  }
  edit() {
    console.log("edit")
  }

// ============================
  render() {
    let fieldList = {
      // position: 'sticky',
      border: '1px solid black',
      height: '500px'
    }
    let divStyle = {
      border: '1px solid black',
      height: '500px'
    }
    let form = {
      border: '1px solid black',
      height: '1450px',
      backgroundImage: "url(http://s3.amazonaws.com/vnn-aws-sites/3581/files/2015/05/2baf45b783822afb-file-page1-5.png)",
      backgroundRepeat: 'no-repeat',
    }
    let button = {
      border: '1px solid black',
      textAlign: 'center',
      cursor: 'move',
      width: '200px',
      height: '20px',
      backgroundColor: 'blue',
      color: 'white',
      marginTop: '10px',
      borderRadius: '5px',
      fontFamily: 'Trebuchet MS',
      fontWeight: 'bold'

    }
    const fieldlist = this.state.fields.map((field, i) =>
      <li>{field.name}-{field.boxType}</li>
    )
    const formRender = this.state.fields.map((field, i) =>
      <div 
        id={i}
        style={{
        top: field.yfield, 
        left: field.xfield,
        zIndex: '100', 
        position: 'absolute',
        border: '1px solid black',
        backgroundColor: 'blue',
        color: 'white',
        fontFamily: 'Trebuchet MS',
        fontWeight: 'bold',
        width: '200px',
        height: '20px',
        textAlign: 'center',
        borderRadius: '5px',
        resize: 'both',
        overflow: 'auto',
        cursor: 'pointer',
        }}
        draggable="true"
        onDragStart={(e) => this.move(e)}
        onClick={() => this.edit()}
        // onDragOver={(e) => this.allowDrop(e)}
        
        >{field.boxType}</div>
    )
    const { x, y } = this.state
    return (
      <div onMouseMove={this.coords.bind(this)}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-1" style={fieldList}>
              <p>State</p>
              <p>x: {x}, y: {y}</p>
              <ol>{fieldlist}</ol>
            </div>
            <div className="col-md-2" style={divStyle}>
              <p>Controls</p>
              <div 
                className="rounded"
                id="textBox"
                style={button} 
                draggable="true"
                onDragStart={(e) => this.drag(e, "textBox")}
                >textBox</div>
              <div 
                id="datePicker"
                style={button} 
                draggable="true"
                onDragStart={(e) => this.drag(e, "datePicker")}
                >datePicker</div>
            </div>
            <div className="col-md-7" >
              <p>Form</p>
              <div 
                style={form}
                onDrop={(e) => this.drop(e)}
                onDragOver={(e) => this.allowDrop(e)}
                >
                
              </div>
            </div>
            <div id="fields">
              {formRender}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
