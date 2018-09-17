import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Controls extends Component {
  render() {
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
    return (
      <div 
        className="rounded"
        id={this.props.type}
        style={button} 
        draggable="true"
        onClick={() => this.props.onClick()}
        onMouseEnter={() => this.props.onMouseEnter()}
        onMouseLeave={() => this.props.onMouseLeave()}
        onDragStart={(e) => this.props.onDragStart(e)}
        >{this.props.type}
        </div>
      
      )
  }
}
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
      //   yfield: 93,
      //   showTooltip: false
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
    this.mouseEnter = this.mouseEnter.bind(this);
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
        yfield: y,
        showTooltip: false
      })
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
  closeTooltip() {
    console.log("closeToolTip")
  }
  edit(id) {
    console.log("edit", id)
    let target = "div" + id
    let tooltip = document.getElementById(target)
    console.log(this.state.fields[id].showTooltip)
    if (this.state.fields[id].showTooltip === false){
      this.setState((state, id) => ({showTooltip: true}))
    } else {
      this.setState((state, id) => ({showTooltip: false}))
    }

  }
  mouseEnter(id) {
    console.log("mouseEnter", id)
    let field = document.getElementById(id)
    field.style.backgroundColor = "lightblue"
  }
  mouseLeave(id) {
    console.log("mouseLeave")
    let field = document.getElementById(id)
    field.style.backgroundColor = "blue"
    
  }
  handleClick() {
    console.log("handle click")
  }
  renderControl(type) {
    return (
      <Controls 
        type={type}
        draggable="true"
        onClick={() => this.handleClick()}
        onMouseEnter={() => this.mouseEnter(type)}
        onMouseLeave={() => this.mouseLeave(type)}
        onDragStart={(e) => this.drag(e, type)}
      
      />
      )
  }
  onBlur(e, id) {
    console.log("onBlur")
    const fields = this.state.fields;
    fields[id].name = e.target.value
    this.setState({ fields })
}
// ============================
  render() {
    let tooltip = {
      backgroundColor: 'red'
    }
    let control = {
      border: '1px solid black'
    }
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
    <div>
      <div 
        id={i}
        style={{
          top: field.yfield, 
          left: field.xfield,
          zIndex: '100', 
          position: 'absolute',
          // border: '1px solid black',
          backgroundColor: 'blue',
          color: 'white',
          fontFamily: 'Trebuchet MS',
          fontWeight: 'bold',
          width: '200px',
          height: '25px',
          textAlign: 'center',
          borderRadius: '5px',
          resize: 'both',
          overflow: 'auto',
          cursor: 'pointer',
        }}
        draggable="true"
        onDragStart={(e) => this.move(e)}
        onClick={() => this.edit(i)}
        onDrop={(e) => this.drop(e)}
        onDragOver={(e) => this.allowDrop(e)}  
        onMouseEnter={() => this.mouseEnter(i)}
        onMouseLeave={() => this.mouseLeave(i)}
        
        >
        <input 
          id={"input"+i}
          type="text"
          onBlur={(e) => this.onBlur(e, i)}/>
        <input
          type="checkbox"/>
      </div>


    </div>
    )
    let left = {
      float: 'left',
      width: '10%',
      position: 'fixed'
    }
    let center = {
      float: 'left',
      width: '15%',
      position: 'fixed',
      marginLeft: '10%'
    }
    let right = {
      float: 'left',
      width: '85%',
      marginLeft: '25%'
    }
    const { x, y } = this.state
    return (
      <div onMouseMove={this.coords.bind(this)}>
        <div className="container-fluid">
          <div className="row">
          <div style={left}>
            <div className="col-md-1" style={fieldList}>
              <p>State</p>
              <div  style={control}>
              <p>x: {x}, y: {y}</p>
              <ol>{fieldlist}</ol>
            </div>
            </div>
            </div>
            <div style={center}>
            <div className="col-md-2" style={divStyle}>
              <p>Controls</p>
              <div style={control}>
              <p>version 3 - Rendered Controls Comp</p>
                {this.renderControl("textBoxR")}
                {this.renderControl("datePickerR")}
                
              </div>
              <div style={control}>
              <p>version 2 - Controls Comp</p>
              <Controls 
                type="textBoxC"
                draggable="true"
                onClick={() => this.handleClick()}
                onMouseEnter={() => this.mouseEnter("textBoxC")}
                onMouseLeave={() => this.mouseLeave("textBoxC")}
                onDragStart={(e) => this.drag(e, "textBoxC")}
                />
              <Controls 
                type="datePickerC"
                draggable="true"
                onMouseEnter={() => this.mouseEnter("datePickerC")}
                onMouseLeave={() => this.mouseLeave("datePickerC")}
                onDragStart={(e) => this.drag(e, "datePickerC")}
              />
              </div>
              <div style={control}>
              <p>version 1 - HTML</p>
              <div 
                className="rounded"
                id="textBox"
                style={button} 
                draggable="true"
                onDragStart={(e) => this.drag(e, "textBox")}
                onMouseEnter={() => this.mouseEnter("textBox")}
                onMouseLeave={() => this.mouseLeave("textBox")}
                >textBox</div>
              <div 
                id="datePicker"
                style={button} 
                draggable="true"
                onDragStart={(e) => this.drag(e, "datePicker")}
                >datePicker</div>
            </div>
            </div>
            </div>
            <div style={right}>
            <div className="col-md-7" >
              <p>Form</p>
              <div 
                style={form}
                onDrop={(e) => this.drop(e)}
                onDragOver={(e) => this.allowDrop(e)}
                >
                
              </div>
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
